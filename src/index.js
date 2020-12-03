import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { PlayIcon, PauseIcon, DownloadIcon, ForwardIcon, BackwardIcon, VolumeIcon, MutedIcon, ReloadIcon/*, SpinnerIcon*/ } from './icons';

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
*  Convert given time to number
* @returns {Number}
*/
function parseTime(s) { // 0:23
  const c = s.split(':');//0,23
  return (parseInt(c[0]) * 60) + parseInt(c[1]); // 23
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
export function getExtensionFromType(type) {
  if (type === 'audio/wav') {
    return '.wav';
  } else if (type === 'audio/ogg') {
    return '.ogg';
  } else if (type === 'audio/mpeg') {
    return '.mp3';
  }
  return '';
}

/**
 * Returns the file name with the extension, if any, removed
 * @param {String} filename The name of the file
 * @returns {String} The new file name
 */
export function extractFileName(filename) {
  const extensionLength = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).length;
  if (extensionLength) {
    return filename.slice(0, filename.length - extensionLength - 1);
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
      loading: !!props.showLoader,
      reload: false,
      /* elapsed time for current track, in seconds -
       * DISPLAY ONLY! the actual elapsed time may
       * not match up if we're currently seeking, since
       * the new time is visually previewed before the
       * audio seeks.
       */
      displayedTime: 0,
      playbackRate: '1x',
      showPlaybackRateList: false,
      volumeRange: 50,
    };

    this.state = Object.assign({}, this.defaultState);

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
    this.audioPlayListener = () => this.setState({ paused: false, reload: false });
    this.audioPauseListener = () => this.setState({ paused: true });
    this.audioEndListener = () => this.setState({ reload: true });
    this.audioStallListener = () => this.togglePause(true);
    this.audioTimeUpdateListener = () => this.handleTimeUpdate();
    this.audioMetadataLoadedListener = () => this.setState({
      activeTrackIndex: this.currentTrackIndex,
    });
    this.onBuffered = () => {
      this.setState({ loading: false })
    };

    this.forward = () => {
      const currentTime = this.audio.currentTime + 5;
      this.audio.currentTime = currentTime;
      this.setState({ displayedTime: currentTime })
    }

    this.rewind = () => {
      const currentTime = this.audio.currentTime - 5;
      this.audio.currentTime = currentTime;
      this.setState({ displayedTime: currentTime })
    }

    this.updateVolume = () => {
      this.audio.volume = this.state.volumeRange / 100;
    }

    this.changePlaybackRate = (speed, display) => {
      this.audio.playbackRate = speed;
      this.setState({ playbackRate: display, showPlaybackRateList: false })
    }

    this.togglePlaybackRate = () => this.setState({ showPlaybackRateList: !this.state.showPlaybackRateList });

    this.changeVolumeRange = (event) => {
      this.setState({ volumeRange: Number(event.target.value) }, () => {
        this.updateVolume();
      });
    }

    this.prevVolumeRange = null;

    this.toggleVolumeRange = () => {
      if (this.state.volumeRange) {
        this.prevVolumeRange = this.state.volumeRange;
      }
      this.setState(prevState => ({
        volumeRange: prevState.volumeRange === 0 ? this.prevVolumeRange : 0
      }), () => { this.updateVolume() });
    }


    this.audio = document.createElement('audio');

    this.downloadAudio = this.downloadAudio.bind(this);

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

    this.updateVolume();
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
    this.getName = this.getName.bind(this);

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
    if ((newSrc !== this.props.src) || (nextProps.showLoader != this.props.showLoader)) {
      if (this.audio) {
        this.audio.src = newSrc || '';
      }
      this.setState(this.defaultState);
    }

    if (newSrc && !this.props.src) {
      if (this.props.autoplay) {
        const delay = this.props.autoplayDelayInSeconds || 0;
        clearTimeout(this.delayTimeout);
        this.delayTimeout = setTimeout(() => this.togglePause(false), delay * 1000);
      }
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
    if (pause && !this.audioPromise) {
      return this.audio.pause();
    }
    if (!this.props.src) {
      return;
    }
    try {
      this.audioPromise = this.audio.play();
      if (this.audio.readyState === 0) {
        this.setState({ loading: true });
      }
      if (this.audioPromise !== undefined) { // Little funny logic to avoid this issue https://goo.gl/LdLk22
        this.audioPromise.then(() => {
          this.audioPromise = undefined;
        });
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

  getName() {
    return this.props.filename ? (this.props.type ? (extractFileName(this.props.filename) + getExtensionFromType(this.props.type)) : this.props.filename) : (this.props.type ? (extractFileName(this.props.src) + getExtensionFromType(this.props.type)) : this.props.src);
  }

  downloadAudio() {
    const filename = this.getName();
    if (isIEBrowser()) {
      const blob = new Blob([this.props.src]);
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = this.props.src;
      a.download = filename;
      a.click();
      document.body.removeChild(a);
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

  getVolumeSliderBgStyle() {
    const settings = {
      fill: this.props.theme.progressBarFillColor,
      background: this.props.theme.progressBarColor
    }
    const min = 0;
    const max = 100;
    const percentage = 100 * (this.state.volumeRange - min) / (max - min);
    return `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage + 0.1}%)`;
  }


  render() {
    const displayedTime = this.state.displayedTime;
    const duration = this.audio && this.audio.duration || 0;

    const elapsedTime = convertToTime(displayedTime);
    const fullTime = convertToTime(duration);
    const timeRatio = `${elapsedTime} `;
    const remainingTime = convertToTime(parseTime(fullTime) - parseTime(timeRatio));

    const progressBarWidth = `${(displayedTime && duration && (displayedTime / duration) * 100 || 0)}%`;

    const adjustDisplayedTime = e => this.adjustDisplayedTime(e);

    return (
      <div className={typeof this.props.theme === 'object' ? 'custom' : this.props.theme}>


        <div id="audio_player" className={classNames('audio_player', { disabled: !this.props.src, dark: this.props.theme.isNotString })} style={{ color: this.props.theme.color, background: this.props.theme.backgroundColor }}>

          <div className="audio_controls">

            <div id="play_pause_button" className={classNames('play_pause_button', 'audio_button', { paused: (!this.state.reload && this.state.paused), loading: this.state.loading, reload: this.state.reload })} onClick={() => this.togglePause()} >
              <div className="play_pause_inner">
                <div className="ivrplaybtn"><PlayIcon /></div>
                <div className="ivrpausebtn"><PauseIcon /></div>
                <div className="spinner"><img src='https://storage.googleapis.com/branddesignmanager/CWANewDesign/images/spinners.gif' /></div>
                <div className="reload-icon"><ReloadIcon /> </div>
              </div>
            </div>
          </div>

          {this.props.showSeekControls && <div className={"btn " + (this.state.reload ? 'disabled' : '')}><i className="button" onClick={this.rewind}><BackwardIcon /></i></div>}
          {this.props.showSeekControls && <div className={"btn " + (this.state.reload ? 'disabled' : '')}><i className="button" onClick={this.forward}><ForwardIcon /></i></div>}

          {this.props.showRunningTimer && <div id="audio_time_progress" className="audio_time_progress noselect" draggable="false" style={{ color: this.props.theme.color }} > {timeRatio}</div>}

          <div id="audio_progress_container" className={classNames("audio_progress_container", { disabled: (this.audio && this.audio.readyState < 3) })} ref={ref => this.audioProgressContainer = ref} onMouseDown={adjustDisplayedTime} onMouseMove={adjustDisplayedTime} onTouchStart={adjustDisplayedTime} onTouchMove={adjustDisplayedTime} style={{ background: this.props.theme.progressBarColor }}>

            <div id="audio_progress" className="audio_progress" style={{ width: progressBarWidth, background: this.props.theme.progressBarFillColor }}> <code /></div>

            <div id="audio_progress_overlay" className="audio_progress_overlay">
              <div className="audio_info_marquee">
                <div id="audio_info" className="audio_info noselect" draggable="false">
                  {'Test'}
                </div>
              </div>
            </div>
          </div>

          {this.props.showFullDuration && <div draggable="false" className="audio_time_progress noselect remaining-time" style={{ color: this.props.theme.color }}>
            {fullTime}
          </div>}

          {this.props.showRemainingTime && <div draggable="false" className="audio_time_progress noselect" style={{ color: this.props.theme.color }}>{remainingTime}</div>}

          {this.props.showVolumeSlider && <div draggable="false" className="volume-wrapper">
            <button onClick={this.toggleVolumeRange} className="audio_button volume-button">
              {this.state.volumeRange !== 0 ? <VolumeIcon /> : <MutedIcon />}
            </button>
            <input ref={ele => { this.range = ele }} className="range-slider" style={{ background: this.getVolumeSliderBgStyle() }} value={this.state.volumeRange} type="range" min="0" max="100" onInput={this.changeVolumeRange} onChange={this.changeVolumeRange} />
          </div>}

          {this.props.showPlaybackRate && <div className={`player-speed-control dropdown-field ft-left ${(this.state.showPlaybackRateList ? 'open' : '')}`}>
            <div className="dropdown-button">
              <button className="button nostyle" onClick={this.togglePlaybackRate} style={{ color: this.props.theme.color }}><span>{this.state.playbackRate} </span><i className="drop-arrow"></i></button>
            </div>
            <div className="dropdownmenu bottom">
              <ul>
                <li onClick={() => { this.changePlaybackRate('1', '1x') }}><a style={{ color: this.props.theme.color }}><code className="brand-bg" />1x</a></li>
                <li onClick={() => { this.changePlaybackRate('1.5', '1.5x') }}><a style={{ color: this.props.theme.color }}><code className="brand-bg" />1.5x</a></li>
                <li onClick={() => { this.changePlaybackRate('2', '2x') }}><a style={{ color: this.props.theme.color }}><code className="brand-bg" />2x</a></li>
                <li onClick={() => { this.changePlaybackRate('3', '3x') }}><a style={{ color: this.props.theme.color }}><code className="brand-bg" />3x</a></li>
              </ul>
            </div>
          </div>}

          {this.props.enableDownload &&
            ((this.props.customDownloadButton && this.props.children) ? this.props.children : <div className="btn"><i className="button" onClick={this.downloadAudio}><DownloadIcon /></i></div>)
          }
        </div>
      </div >
    );
  }

}

AudioPlayer.propTypes = {
  src: PropTypes.string,
  autoplay: PropTypes.bool,
  autoplayDelayInSeconds: PropTypes.number,
  cycle: PropTypes.bool,
  disableSeek: PropTypes.bool,
  // style: PropTypes.object,
  onMediaEvent: PropTypes.object,
  audioElementRef: PropTypes.func,
  showLoader: PropTypes.bool,
  showSeekControls: PropTypes.bool,
  showPlaybackRate: PropTypes.bool,
  enableDownload: PropTypes.bool,
  showRunningTimer: PropTypes.bool,
  showFullDuration: PropTypes.bool,
  showRemainingTime: PropTypes.bool,
  showVolumeSlider: PropTypes.bool,
  customDownloadButton: PropTypes.bool,
  children: PropTypes.any,
  type: PropTypes.oneOf(['audio/wav', 'audio/ogg', 'audio/mpeg', '']),
  filename: PropTypes.string,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      color: PropTypes.string,
      backgroundColor: PropTypes.string,
      progressBarColor: PropTypes.string.isRequired,
      progressBarFillColor: PropTypes.string.isRequired,
    })
  ]),
};

AudioPlayer.defaultProps = {
  cycle: false,
  showLoader: false,
  showSeekControls: false,
  enableDownload: true,
  showRunningTimer: false,
  showFullDuration: false,
  showRemainingTime: false,
  showVolumeSlider: false,
  showPlaybackRate: false,
  customDownloadButton: false,
  type: '',
  filename: '',
  children: undefined,
  theme: {
    progressBarColor: '#e6e9f0',
    progressBarFillColor: '#6699ff',
  },
};
