(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-custom-audio-player"] = factory();
	else
		root["react-custom-audio-player"] = factory();
})(this, function() {
return webpackJsonpreact_custom_audio_player([1],{

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PauseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DownloadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ReloadIcon; });


var PlayIcon = function PlayIcon() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    { width: "14px", height: "14px", viewBox: "315 8 14 14", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M321.89468,9.99823037 C322.154701,9.51069072 322.579033,9.5158552 322.8363,9.99823037 L327.89468,19.4826931 C328.154701,19.9702328 327.914515,20.3654617 327.374712,20.3654617 L323.356268,20.3654617 C322.809077,20.3654617 321.914515,20.3654617 321.374712,20.3654617 L317.356268,20.3654617 C316.809077,20.3654617 316.579033,19.9650683 316.8363,19.4826931 L321.89468,9.99823037 Z", id: "Triangle", stroke: "#3B4752", strokeWidth: "2", fill: "none", transform: "translate(322.365476, 14.999986) rotate(90.000000) translate(-322.365476, -14.999986) " })
  );
};

var PauseIcon = function PauseIcon() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    { width: "4px", height: "4px", viewBox: "0 0 8 14", version: "1.1" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", strokeLinecap: "round" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "g",
        { id: "Artboard-5", transform: "translate(-385.000000, -125.000000)", stroke: "#3B4752", strokeWidth: "2" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "g",
          { id: "Group-2", transform: "translate(385.000000, 126.000000)" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M1,0.5 L1,11.5", id: "Line" }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7,0.5 L7,11.5", id: "Line-Copy" })
        )
      )
    )
  );
};

var DownloadIcon = function DownloadIcon() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    { width: "14px", height: "13px", viewBox: "0 0 14 13", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { id: "Inbox", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "g",
        { id: "Inbox-Message-Detailed-Copy", transform: "translate(-1249.000000, -103.000000)", fill: "#3B4752" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "g",
          { id: "Header", transform: "translate(615.000000, 88.000000)" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M646.875,22.25 C647.187502,22.25 647.453124,22.3593739 647.671875,22.578125 C647.890626,22.7968761 648,23.0624984 648,23.375 L648,26.375 C648,26.6875016 647.890626,26.9531239 647.671875,27.171875 C647.453124,27.3906261 647.187502,27.5 646.875,27.5 L635.625,27.5 C635.312498,27.5 635.046876,27.3906261 634.828125,27.171875 C634.609374,26.9531239 634.5,26.6875016 634.5,26.375 L634.5,23.375 C634.5,23.0624984 634.609374,22.7968761 634.828125,22.578125 C635.046876,22.3593739 635.312498,22.25 635.625,22.25 L637.78125,22.25 L636.703125,21.171875 C636.484374,20.9374988 636.378906,20.6679703 636.386719,20.3632812 C636.394531,20.0585922 636.503905,19.7968761 636.714844,19.578125 C636.925782,19.3593739 637.187498,19.25 637.5,19.25 L639,19.25 L639,16.625 C639,16.3124984 639.109374,16.0468761 639.328125,15.828125 C639.546876,15.6093739 639.812498,15.5 640.125,15.5 L642.375,15.5 C642.687502,15.5 642.953124,15.6093739 643.171875,15.828125 C643.390626,16.0468761 643.5,16.3124984 643.5,16.625 L643.5,19.25 L645,19.25 C645.328127,19.25 645.597655,19.3593739 645.808594,19.578125 C646.019532,19.7968761 646.128906,20.0585922 646.136719,20.3632812 C646.144531,20.6679703 646.031251,20.9374988 645.796875,21.171875 L644.71875,22.25 L646.875,22.25 Z M637.5,20.375 L641.25,24.125 L645,20.375 L642.375,20.375 L642.375,16.625 L640.125,16.625 L640.125,20.375 L637.5,20.375 Z M646.875,26.375 L646.875,23.375 L643.59375,23.375 L642.046875,24.921875 C641.828124,25.1406261 641.562502,25.25 641.25,25.25 C640.937498,25.25 640.671876,25.1406261 640.453125,24.921875 L638.90625,23.375 L635.625,23.375 L635.625,26.375 L646.875,26.375 Z M644.8125,24.875 C644.8125,24.7187492 644.867187,24.585938 644.976562,24.4765625 C645.085938,24.367187 645.218749,24.3125 645.375,24.3125 C645.531251,24.3125 645.664062,24.367187 645.773438,24.4765625 C645.882813,24.585938 645.9375,24.7187492 645.9375,24.875 C645.9375,25.0312508 645.882813,25.164062 645.773438,25.2734375 C645.664062,25.382813 645.531251,25.4375 645.375,25.4375 C645.218749,25.4375 645.085938,25.382813 644.976562,25.2734375 C644.867187,25.164062 644.8125,25.0312508 644.8125,24.875 Z", id: "More-Icon" })
        )
      )
    )
  );
};

var ReloadIcon = function ReloadIcon() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    { width: "16px", height: "16px", viewBox: "0 0 17 17", version: "1.1" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "defs",
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M10,21 C8.89742857,21 8,20.1028571 8,19 C8,17.8971429 8.89742857,17 10,17 C11.1025714,17 12,17.8971429 12,19 C12,20.1028571 11.1025714,21 10,21 Z", id: "path-1" })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { id: "Messages", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "g",
        { id: "Messages-V2", transform: "translate(-973.000000, -248.000000)", fillRule: "nonzero" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "g",
          { id: "Replay-Icon", transform: "translate(969.000000, 244.000000)" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7.02419728,11.4574669 C7.2984025,8.3979809 9.86916203,6 13,6 C16.3137085,6 19,8.6862915 19,12 C19,15.3137085 16.3137085,18 13,18 L13,20 C17.418278,20 21,16.418278 21,12 C21,7.581722 17.418278,4 13,4 C8.76405539,4 5.29704552,7.29220101 5.01810658,11.4574669 L3.80875019,11.4574669 C3.34987948,11.4574669 3.08783403,11.9815578 3.36327292,12.3478391 L5.58949463,15.3159406 C5.81194211,15.6129254 6.25741938,15.6135078 6.47986685,15.3165229 L8.70608857,12.3484214 C8.98152746,11.9809754 8.719482,11.4580492 8.26119362,11.4574669 L7.02419728,11.4574669 Z", id: "Combined-Shape", fill: "#3B4752", transform: "translate(12.125420, 12.000000) rotate(30.000000) translate(-12.125420, -12.000000) " })
        )
      )
    )
  );
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__icons__ = __webpack_require__(20);
/* harmony export (immutable) */ __webpack_exports__["getExtensionFromType"] = getExtensionFromType;
/* harmony export (immutable) */ __webpack_exports__["getFileName"] = getFileName;
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var log = console.log.bind(console); //eslint-disable-line
var logError = console.error ? console.error.bind(console) : log; //eslint-disable-line
var logWarning = console.warn ? console.warn.bind(console) : log; //eslint-disable-line

/* converts given number of seconds to standard time display format
 * http://goo.gl/kEvnKn
 */
function convertToTime(number) {
  var mins = Math.floor(number / 60);
  var secs = (number % 60).toFixed();
  return '' + (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
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
function getFileName(filename) {
  var extensionLength = filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).length;
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

var AudioPlayer = function (_Component) {
  _inherits(AudioPlayer, _Component);

  function AudioPlayer(props) {
    _classCallCheck(this, AudioPlayer);

    /* true if the user is currently dragging the mouse
     * to seek a new track position
     */
    var _this = _possibleConstructorReturn(this, (AudioPlayer.__proto__ || Object.getPrototypeOf(AudioPlayer)).call(this, props));

    _this.seekInProgress = false;

    _this.defaultState = {
      paused: true,
      loading: false,
      reload: false,
      /* elapsed time for current track, in seconds -
       * DISPLAY ONLY! the actual elapsed time may
       * not match up if we're currently seeking, since
       * the new time is visually previewed before the
       * audio seeks.
       */
      displayedTime: 0
    };

    _this.state = Object.assign({}, _this.defaultState);
    if (props.showLoader) {
      _this.state.loading = true;
    }

    // html audio element used for playback
    _this.audio = null;
    _this.audioProgressContainer = null;
    /* bounding rectangle used for calculating seek
     * position from mouse/touch coordinates
     */
    _this.audioProgressBoundingRect = null;

    // event listeners to add on mount and remove on unmount
    _this.seekReleaseListener = function (e) {
      return _this.seek(e);
    };
    _this.resizeListener = function () {
      return _this.fetchAudioProgressBoundingRect();
    };
    _this.audioPlayListener = function () {
      return _this.setState({ paused: false, reload: false });
    };
    _this.audioPauseListener = function () {
      return _this.setState({ paused: true });
    };
    _this.audioEndListener = function () {
      return _this.setState({ reload: true });
    };
    _this.audioStallListener = function () {
      return _this.togglePause(true);
    };
    _this.audioTimeUpdateListener = function () {
      return _this.handleTimeUpdate();
    };
    _this.audioMetadataLoadedListener = function () {
      return _this.setState({
        activeTrackIndex: _this.currentTrackIndex
      });
    };
    _this.onBuffered = function () {
      _this.setState({ loading: false });
    };

    _this.audio = document.createElement('audio');

    _this.downloadAudio = _this.downloadAudio.bind(_this);
    return _this;
  }

  _createClass(AudioPlayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // add event listeners bound outside the scope of our component
      window.addEventListener('mouseup', this.seekReleaseListener);
      document.addEventListener('touchend', this.seekReleaseListener);
      window.addEventListener('resize', this.resizeListener);
      this.resizeListener();

      var audio = this.audio;

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
          var delay = this.props.autoplayDelayInSeconds || 0;
          clearTimeout(this.delayTimeout);
          this.delayTimeout = setTimeout(function () {
            return _this2.togglePause(false);
          }, delay * 1000);
        }
      }

      if (this.props.audioElementRef) {
        this.props.audioElementRef(audio);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
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
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Update media event listeners that may have changed
      this.removeMediaEventListeners(this.props.onMediaEvent);
      this.addMediaEventListeners(nextProps.onMediaEvent);

      var newSrc = nextProps.src;
      if (newSrc !== this.props.src || nextProps.showLoader != this.props.showLoader) {
        if (this.audio) {
          this.audio.src = newSrc || '';
        }
        this.setState(this.defaultState);
      }
    }
  }, {
    key: 'addMediaEventListeners',
    value: function addMediaEventListeners(mediaEvents) {
      var _this3 = this;

      if (!mediaEvents) {
        return;
      }
      Object.keys(mediaEvents).forEach(function (type) {
        if (typeof mediaEvents[type] !== 'function') {
          return;
        }
        _this3.audio.addEventListener(type, mediaEvents[type]);
      });
    }
  }, {
    key: 'removeMediaEventListeners',
    value: function removeMediaEventListeners(mediaEvents) {
      var _this4 = this;

      if (!mediaEvents) {
        return;
      }
      Object.keys(mediaEvents).forEach(function (type) {
        if (typeof mediaEvents[type] !== 'function') {
          return;
        }
        _this4.audio.removeEventListener(type, mediaEvents[type]);
      });
    }

    // componentDidUpdate() {
    //    if we loaded a new playlist and reset the current track marker, we
    //    * should load up the first one.

    //   if (this.audio && this.currentTrackIndex === -1) {
    //     this.skipToNextTrack(false);
    //   }
    // }

  }, {
    key: 'togglePause',
    value: function togglePause(value) {
      if (!this.audio) {
        return;
      }
      var pause = typeof value === 'boolean' ? value : !this.state.paused;
      if (pause) {
        return this.audio.pause();
      }
      if (!this.props.src) {
        return;
      }
      try {
        this.audio.play();
        if (this.audio.readyState === 0) {
          this.setState({ loading: true });
        }
      } catch (error) {
        logError(error);
        var warningMessage = 'Audio playback failed at ' + new Date().toLocaleTimeString() + '! (Perhaps autoplay is disabled in this browser.)';
        logWarning(warningMessage);
      }
    }
  }, {
    key: 'updateSource',
    value: function updateSource() {
      this.audio.src = this.props.src;
    }
  }, {
    key: 'fetchAudioProgressBoundingRect',
    value: function fetchAudioProgressBoundingRect() {
      this.audioProgressBoundingRect = this.audioProgressContainer.getBoundingClientRect();
    }
  }, {
    key: 'handleTimeUpdate',
    value: function handleTimeUpdate() {
      if (!this.seekInProgress && this.audio) {
        this.setState({
          displayedTime: this.audio.currentTime
        });
      }
    }
  }, {
    key: 'adjustDisplayedTime',
    value: function adjustDisplayedTime(event) {
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
      var boundingRect = this.audioProgressBoundingRect;
      var isTouch = event.type.slice(0, 5) === 'touch';
      var pageX = isTouch ? event.targetTouches.item(0).pageX : event.pageX;
      var position = pageX - boundingRect.left - document.body.scrollLeft;
      var containerWidth = boundingRect.width;
      var progressPercentage = position / containerWidth;
      this.setState({
        displayedTime: progressPercentage * this.audio.duration
      });
    }
  }, {
    key: 'downloadAudio',
    value: function downloadAudio() {
      var filename = this.props.type ? getFileName(this.props.src) + getExtensionFromType(this.props.type) : this.props.src;
      if (isIEBrowser()) {
        var blob = new Blob([this.props.src]);
        window.navigator.msSaveBlob(blob, filename);
      } else {
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.href = this.props.src;
        a.download = filename;
        a.click();
        document.removeChild(a);
      }
    }
  }, {
    key: 'seek',
    value: function seek(event) {
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
      var displayedTime = this.state.displayedTime;
      if (isNaN(displayedTime)) {
        return;
      }
      this.audio.currentTime = displayedTime;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var displayedTime = this.state.displayedTime;
      var duration = this.audio && this.audio.duration || 0;

      var elapsedTime = convertToTime(displayedTime);
      // const fullTime = convertToTime(duration);
      var timeRatio = elapsedTime + ' ';

      var progressBarWidth = (displayedTime && duration && displayedTime / duration * 100 || 0) + '%';

      var adjustDisplayedTime = function adjustDisplayedTime(e) {
        return _this5.adjustDisplayedTime(e);
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { id: 'audio_player', className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('audio_player', { disabled: !this.props.src }), style: this.props.style },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'audio_controls' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'play_pause_button', className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('play_pause_button', 'audio_button', { paused: !this.state.reload && this.state.paused, loading: this.state.loading, reload: this.state.reload }), onClick: function onClick() {
                return _this5.togglePause();
              } },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'play_pause_inner' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ivrplaybtn' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["a" /* PlayIcon */], null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'ivrpausebtn' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["b" /* PauseIcon */], null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'spinner' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: 'https://storage.googleapis.com/branddesignmanager/CWANewDesign/images/spinners.gif' })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'reload-icon' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["c" /* ReloadIcon */], null),
                ' '
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'audio_time_progress', className: 'audio_time_progress noselect', draggable: 'false' },
          timeRatio
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'audio_progress_container', className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()("audio_progress_container", { disabled: this.audio && this.audio.readyState < 3 }), ref: function ref(_ref) {
              return _this5.audioProgressContainer = _ref;
            }, onMouseDown: adjustDisplayedTime, onMouseMove: adjustDisplayedTime, onTouchStart: adjustDisplayedTime, onTouchMove: adjustDisplayedTime },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'audio_progress', className: 'audio_progress', style: { width: progressBarWidth } },
            ' ',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('code', null)
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { id: 'audio_progress_overlay', className: 'audio_progress_overlay' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'audio_info_marquee' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { id: 'audio_info', className: 'audio_info noselect', draggable: 'false' },
                'Test'
              )
            )
          )
        ),
        this.props.enableDownload && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'download-btn' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'i',
            { className: 'button', onClick: this.downloadAudio },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["d" /* DownloadIcon */], null)
          )
        )
      );
    }
  }]);

  return AudioPlayer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AudioPlayer);


AudioPlayer.propTypes = {
  src: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  autoplay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  autoplayDelayInSeconds: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  cycle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  disableSeek: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onMediaEvent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  audioElementRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  showLoader: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  enableDownload: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['audio/wav', 'audio/ogg', 'audio/mpeg', ''])
};

AudioPlayer.defaultProps = {
  cycle: false,
  showLoader: false,
  enableDownload: true,
  type: ''
};

if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) {
          // Skip over if undefined or null
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

/***/ })

},[23]);
});