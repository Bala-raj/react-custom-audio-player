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
/* unused harmony export DownloadIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ReloadIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpinnerIcon; });


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
    { width: "22px", height: "16px", viewBox: "1 4 22 16", version: "1.1" },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M5,18 L19,18 L19,14.990778 C19,14.4435864 19.4438648,14 20,14 C20.5522847,14 21,14.4509752 21,14.990778 L21,19.009222 C21,19.2817391 20.8899071,19.5285588 20.7106822,19.707684 C20.526412,19.8893137 20.2793017,20 20.0066023,20 L3.99339768,20 C3.72059477,20 3.47347534,19.8902571 3.29394673,19.7115371 C3.1110417,19.5248505 3,19.2780517 3,19.009222 L3,14.990778 C3,14.4435864 3.44386482,14 4,14 C4.55228475,14 5,14.4509752 5,14.990778 L5,18 Z M10.9799805,10.9861538 L10.9799805,5.00262796 C10.9799805,4.45312946 11.4276957,4 11.9799805,4 C12.5361156,4 12.9799805,4.44889183 12.9799805,5.00262796 L12.9799805,10.9861538 L14.6839762,10.9861538 C15.2404693,10.9868609 15.5586673,11.6218428 15.2242058,12.0680271 L12.5209366,15.6721504 C12.2508218,16.0327749 11.7098851,16.0320678 11.4397703,15.6714433 L8.73650108,12.06732 C8.40203958,11.6225499 8.72023763,10.9861538 9.27743777,10.9861538 L10.9799805,10.9861538 Z", id: "Combined-Shape", stroke: "none", fill: "#3B4752", fillRule: "evenodd" })
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { d: "M7.02419728,11.4574669 C7.2984025,8.3979809 9.86916203,6 13,6 C16.3137085,6 19,8.6862915 19,12 C19,15.3137085 16.3137085,18 13,18 L13,20 C17.418278,20 21,16.418278 21,12 C21,7.581722 17.418278,4 13,4 C8.76405539,4 5.29704552,7.29220101 5.01810658,11.4574669 L3.80875019,11.4574669 C3.34987948,11.4574669 3.08783403,11.9815578 3.36327292,12.3478391 L5.58949463,15.3159406 C5.81194211,15.6129254 6.25741938,15.6135078 6.47986685,15.3165229 L8.70608857,12.3484214 C8.98152746,11.9809754 8.719482,11.4580492 8.26119362,11.4574669 L7.02419728,11.4574669 Z", id: "Combined-Shape", fill: "#3B4752", transform: "translate(12.125420, 12.000000) rotate(30.000000) translate(-12.125420, -12.000000) " }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "g",
            { id: "Shape" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("use", { fill: "#00BBE5", fillRule: "evenodd", xlinkHref: "#path-1" }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", { stroke: "#FFFFFF", strokeWidth: "0.8", d: "M10,20.75 C10.9646044,20.75 11.75,19.9646818 11.75,19 C11.75,18.0353182 10.9646044,17.25 10,17.25 C9.03539562,17.25 8.25,18.0353182 8.25,19 C8.25,19.9646818 9.03539562,20.75 10,20.75 Z" })
          )
        )
      )
    )
  );
};

var SpinnerIcon = function SpinnerIcon() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "svg",
    { className: "lds-spinner", width: "35px", height: "35px", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", style: { "animationPlayState": "paused", "animationDelay": "-1s", "background": "none" } },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(0 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.9166666666666666s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(30 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.8333333333333334s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(60 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.75s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(90 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.6666666666666666s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(120 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.5833333333333334s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(150 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.5s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(180 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.4166666666666667s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(210 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { animationPlayState: "paused", animationDelay: "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.3333333333333333s", repeatCount: "indefinite", style: { animationPlayState: "paused", animationDelay: "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(240 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.25s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(270 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.16666666666666666s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(300 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "-0.08333333333333333s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "g",
      { transform: "rotate(330 50 50)", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "rect",
        { x: "47", y: "24", rx: "9.4", ry: "4.8", width: "4", height: "8", fill: "#000", style: { "animationPlayState": "paused", "animationDelay": "-1s" } },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("animate", { attributeName: "opacity", values: "1;0", dur: "1s", begin: "0s", repeatCount: "indefinite", style: { "animationPlayState": "paused", "animationDelay": "-1s" } })
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
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["c" /* SpinnerIcon */], null)
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'reload-icon' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__icons__["d" /* ReloadIcon */], null),
                ' '
              )
            )
          )
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { id: 'audio_time_progress', className: 'audio_time_progress noselect', draggable: 'false' },
          timeRatio
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
  showLoader: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

AudioPlayer.defaultProps = {
  cycle: false,
  showLoader: false
};

/***/ })

},[23]);
});