import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { PlayIcon, PauseIcon, DownloadIcon, ReloadIcon/*, SpinnerIcon*/ } from './icons';



const log = console.log.bind(console); //eslint-disable-line
const logError = console.error ? console.error.bind(console) : log; //eslint-disable-line
const logWarning = console.warn ? console.warn.bind(console) : log; //eslint-disable-line

/* converts given number of seconds to standard time display format
 * http://goo.gl/kEvnKn
 */
function convertToTime(number) {
  const mins = Math.floor(number / 60);
  const secs = (number % 60).toFixed();
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * Returns true for Internet Explorer and Edge, false otherwise
 * @returns {Boolean}
 */
function isIEBrowser() {
  return navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge/') > -1;
}

/**
 * Returns the extension based on the passed type
 * @param {String} type The file type
 * @returns {String} The extension of the file
 */
function getExtensionFromType(type) {
  if (type === 'audio/wav') {
    return 'wav';
  } else if (type === 'audio/ogg') {
    return 'ogg';
  } else if (type === 'audio/mpeg') {
    return 'mp3';
  }
  return '';
}

/**
 * Returns the file name with the extension, if any, removed
 * @param {String} filename The name of the file
 * @returns {String} The new file name
 */
function getFileName(filename) {
  const extensionLength = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).length;
  if (extensionLength) {
    return filename.slice(0, filename.length - extensionLength);
  }
  return filename;
}

/*
 * AudioPlayer
 *
 * Accepts 'src' prop of the form:
 *
 * "./path/to/file.mp3"
 * 
 * Accepts 'autoplay' prop (true/[false]).
 *
 * Accepts 'autoplayDelayInSeconds' prop (default 0).
 *
 * Accepts 'disableSeek' prop (default false,
 * disables seeking through the audio if true).
 *
 * Accepts 'cycle' prop (default true,
 * starts playing at the beginning of the playlist
 * when finished if true).
 *
 * Accepts 'style' prop, object, is applied to
 * outermost div (React styles).
 *
 * Accepts 'onMediaEvent' prop, an object used for
 * listening to media events on the underlying audio element.
 *
 * Accepts 'audioElementRef' prop, a function called after
 * the component mounts and before it unmounts with the
 * internally-referenced HTML audio element as its only parameter.
 * Similar to: https://facebook.github.io/react/docs/refs-and-the-dom.html
 */

export default class AudioPlayer extends Component {

  constructor(props) {
    super(props);

    /* true if the user is currently dragging the mouse
     * to seek a new track position
     */
    this.seekInProgress = false;
    
    this.defaultState = {
      paused: true,
      loading: false,
      reload:false,
      /* elapsed time for current track, in seconds -
       * DISPLAY ONLY! the actual elapsed time may
       * not match up if we're currently seeking, since
       * the new time is visually previewed before the
       * audio seeks.
       */
      displayedTime: 0,
    };

    this.state = Object.assign({}, this.defaultState);
    if(props.showLoader) {
      this.state.loading = true;
    }

    // html audio element used for playback
    this.audio = null;
    this.audioProgressContainer = null;
    /* bounding rectangle used for calculating seek
     * position from mouse/touch coordinates
     */
    this.audioProgressBoundingRect = null;

    // event listeners to add on mount and remove on unmount
    this.seekReleaseListener = e => this.seek(e);
    this.resizeListener = () => this.fetchAudioProgressBoundingRect();
    this.audioPlayListener = () => this.setState({ paused: false, reload:false });
    this.audioPauseListener = () => this.setState({ paused: true });
    this.audioEndListener = () => this.setState({reload: true});
    this.audioStallListener = () => this.togglePause(true);
    this.audioTimeUpdateListener = () => this.handleTimeUpdate();
    this.audioMetadataLoadedListener = () => this.setState({
      activeTrackIndex: this.currentTrackIndex,
    });
    this.onBuffered = () => {
        this.setState({ loading: false })
    };

    this.audio = document.createElement('audio');
  }

  componentDidMount() {
    // add event listeners bound outside the scope of our component
    window.addEventListener('mouseup', this.seekReleaseListener);
    document.addEventListener('touchend', this.seekReleaseListener);
    window.addEventListener('resize', this.resizeListener);
    this.resizeListener();

    const audio = this.audio;

    // add event listeners on the audio element
    audio.preload = 'none';
    audio.addEventListener('play', this.audioPlayListener);
    audio.addEventListener('pause', this.audioPauseListener);
    audio.addEventListener('ended', this.audioEndListener);
    audio.addEventListener('stalled', this.audioStallListener);
    audio.addEventListener('timeupdate', this.audioTimeUpdateListener);
    audio.addEventListener('loadedmetadata', this.audioMetadataLoadedListener);    
    audio.addEventListener('loadeddata', this.onBuffered);    
    this.addMediaEventListeners(this.props.onMediaEvent);    

    if (this.props.src) {
      this.updateSource();
      if (this.props.autoplay) {
        const delay = this.props.autoplayDelayInSeconds || 0;
        clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => this.togglePause(false), delay * 1000);
      }
    }

    if (this.props.audioElementRef) {
      this.props.audioElementRef(audio);
    }
  }

  componentWillUnmount() {
    // remove event listeners bound outside the scope of our component
    window.removeEventListener('mouseup', this.seekReleaseListener);
    document.removeEventListener('touchend', this.seekReleaseListener);
    window.removeEventListener('resize', this.resizeListener);

    // remove event listeners on the audio element
    this.audio.removeEventListener('play', this.audioPlayListener);
    this.audio.removeEventListener('pause', this.audioPauseListener);
    this.audio.removeEventListener('ended', this.audioEndListener);
    this.audio.removeEventListener('stalled', this.audioStallListener);
    this.audio.removeEventListener('timeupdate', this.audioTimeUpdateListener);
    this.audio.removeEventListener('loadedmetadata', this.audioMetadataLoadedListener);   
    this.audio.addEventListener('loadeddata', this.onBuffered);   
    
    this.removeMediaEventListeners(this.props.onMediaEvent);
    clearTimeout(this.gapLengthTimeout);
    clearTimeout(this.delayTimeout);

    // pause the audio element before we unmount
    this.audio.pause();

    if (this.props.audioElementRef) {
      this.props.audioElementRef(this.audio);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Update media event listeners that may have changed
    this.removeMediaEventListeners(this.props.onMediaEvent);
    this.addMediaEventListeners(nextProps.onMediaEvent);

    const newSrc = nextProps.src;
    if ((newSrc !== this.props.src) || ( nextProps.showLoader != this.props.showLoader)) {
      if (this.audio) {
        this.audio.src = newSrc || '';
      }
      this.setState(this.defaultState);
    }
  }

  addMediaEventListeners(mediaEvents) {
    if (!mediaEvents) {
      return;
    }
    Object.keys(mediaEvents).forEach((type) => {
      if (typeof mediaEvents[type] !== 'function') {
        return;
      }
      this.audio.addEventListener(type, mediaEvents[type]);
    });
  }

  removeMediaEventListeners(mediaEvents) {
    if (!mediaEvents) {
      return;
    }
    Object.keys(mediaEvents).forEach((type) => {
      if (typeof mediaEvents[type] !== 'function') {
        return;
      }
      this.audio.removeEventListener(type, mediaEvents[type]);
    });
  }

  // componentDidUpdate() {
  //    if we loaded a new playlist and reset the current track marker, we
  //    * should load up the first one.
     
  //   if (this.audio && this.currentTrackIndex === -1) {
  //     this.skipToNextTrack(false);
  //   }
  // }

  togglePause(value) {
    if (!this.audio) {
      return;
    }
    const pause = typeof value === 'boolean' ? value : !this.state.paused;
    if (pause) {
      return this.audio.pause();
    }
    if (!this.props.src) {
      return;
    }
    try {
      this.audio.play();
      if(this.audio.readyState === 0) {
        this.setState({loading:true});
    }
    } catch (error) {
      logError(error);
      const warningMessage =
        `Audio playback failed at ${
        new Date().toLocaleTimeString()
        }! (Perhaps autoplay is disabled in this browser.)`;
      logWarning(warningMessage);
    }
  }

  updateSource() {
    this.audio.src = this.props.src;
  }

  fetchAudioProgressBoundingRect() {
    this.audioProgressBoundingRect = this.audioProgressContainer.getBoundingClientRect();
  }

  handleTimeUpdate() {
    if (!this.seekInProgress && this.audio) {
      this.setState({
        displayedTime: this.audio.currentTime,
      });
    }
  }

  adjustDisplayedTime(event) {
    if (!this.props.src || this.props.disableSeek || this.audio.readyState === 0) {
      return;
    }
    // make sure we don't select stuff in the background while seeking
    if (event.type === 'mousedown' || event.type === 'touchstart') {
      this.seekInProgress = true;
      document.body.classList.add('noselect');
    } else if (!this.seekInProgress) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers if we're seeking.
     */
    event.preventDefault();
    const boundingRect = this.audioProgressBoundingRect;
    const isTouch = event.type.slice(0, 5) === 'touch';
    const pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
    const position = pageX - boundingRect.left - document.body.scrollLeft;
    const containerWidth = boundingRect.width;
    const progressPercentage = position / containerWidth;
    this.setState({
      displayedTime: progressPercentage * this.audio.duration,
    });
  }

  downloadAudio() {
    const filename = this.props.type ? (getFileName(this.props.src) + getExtensionFromType(this.props.type)) : this.props.src;
    if (isIEBrowser()) {
      const blob = new Blob([this.props.src]);
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      a.href = this.props.src;
      a.download = filename;
      a.click();
    }
  }

  seek(event) {
    /* this function is activated when the user lets
     * go of the mouse, so if .noselect was applied
     * to the document body, get rid of it.
     */
    document.body.classList.remove('noselect');
    if (!this.seekInProgress) {
      return;
    }
    /* we don't want mouse handlers to receive the event
     * after touch handlers if we're seeking.
     */
    event.preventDefault();
    this.seekInProgress = false;
    const displayedTime = this.state.displayedTime;
    if (isNaN(displayedTime)) {
      return;
    }
    this.audio.currentTime = displayedTime;
  }

  render() {

    const displayedTime = this.state.displayedTime;
    const duration = this.audio && this.audio.duration || 0;

    const elapsedTime = convertToTime(displayedTime);
    // const fullTime = convertToTime(duration);
    const timeRatio = `${elapsedTime} `;

    const progressBarWidth = `${( displayedTime && duration && (displayedTime / duration) * 100 || 0) }%`;

    const adjustDisplayedTime = e => this.adjustDisplayedTime(e);

    return (
      <div id="audio_player" className={classNames('audio_player',{ disabled: !this.props.src })} style={this.props.style}>

        <div className="audio_controls">

          <div id="play_pause_button" className={classNames('play_pause_button', 'audio_button', { paused: (!this.state.reload && this.state.paused), loading: this.state.loading, reload:this.state.reload })} onClick={() => this.togglePause()} >
            <div className="play_pause_inner">
              <div className="ivrplaybtn"><PlayIcon /></div>
              <div className="ivrpausebtn"><PauseIcon /></div>
              <div className="spinner"><img src='https://storage.googleapis.com/branddesignmanager/CWANewDesign/images/spinners.gif' /></div>
              <div className="reload-icon"><ReloadIcon /> </div>
            </div>
          </div>          
        </div>
        
        <div id="audio_time_progress" className="audio_time_progress noselect" draggable="false">
          {timeRatio}
        </div>
        
        <div id="audio_progress_container"className={ classNames("audio_progress_container", { disabled: (this.audio && this.audio.readyState < 3)})} ref={ref => this.audioProgressContainer = ref}onMouseDown={adjustDisplayedTime}onMouseMove={adjustDisplayedTime}onTouchStart={adjustDisplayedTime}onTouchMove={adjustDisplayedTime}>
          
          <div id="audio_progress" className="audio_progress" style={{ width: progressBarWidth }}> <code/></div>
          
          <div id="audio_progress_overlay" className="audio_progress_overlay">
            <div className="audio_info_marquee">
              <div id="audio_info" className="audio_info noselect" draggable="false">
                {'Test'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="download-btn"><button className="nostyle"><DownloadIcon /></button></div>
      </div>
    );
  }

}

AudioPlayer.propTypes = {
  src: PropTypes.string,
  autoplay: PropTypes.bool,
  autoplayDelayInSeconds: PropTypes.number,  
  cycle: PropTypes.bool,
  disableSeek: PropTypes.bool,  
  style: PropTypes.object,
  onMediaEvent: PropTypes.object,
  audioElementRef: PropTypes.func,
  showLoader: PropTypes.bool,
};

AudioPlayer.defaultProps = {
  cycle: false,
  showLoader: false,
};

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      'use strict';
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

