# React Audio Player
This is a light React wrapper around the HTML5 audio tag.  It provides the ability to manipulate the player and listen to events through a nice React interface.

## Installation

    npm install --save react-custom-audio-player

## Usage

    import AudioPlayer from 'react-custom-audio-player';
    //...
     <AudioPlayer src='sample.wav'/>

### Example

See the example directory for a basic working example of using this.  You can run it with the command `npm run example`.

## Props

### Props - Native/React Attributes
See the [audio tag documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) for detailed explanations of these attributes.

#### autoPlay {Bool} [false]

#### children {Element} [null]

#### className {String} ['']

#### controls {Bool} [false]

#### loop {Bool} [false]

#### muted {Bool} [false]

#### preload {String} ['metadata']

#### src {String} ['']

#### style {Object} [{}]

### Props - Events

#### listenInterval {Number} [10000]
Indicates how often to call the `onListened` prop during playback, in milliseconds.

#### onAbort {Function}
Called when unloading the audio player, like when switching to a different src file. Passed the event.

#### onCanPlay {Function}
Called when enough of the file has been downloaded to be able to start playing.  Passed the event.

#### onCanPlayThrough {Function}
Called when enough of the file has been downloaded to play through the entire file.  Passed the event.

#### onEnded {Function}
Called when playback has finished to the end of the file. Passed the event.

#### onError {Function}
Called when the audio tag encounters an error. Passed the event.

#### onListen {Function}
Called every `listenInterval` milliseconds during playback.  Passed the event.

#### onPause {Function}
Called when the user pauses playback. Passed the event.

#### onPlay {Function}
Called when the user taps play.  Passed the event.

#### onSeeked {Function}
Called when the user drags the time indicator to a new time. Passed the event.

#### onLoadedMetadata {Function}
Called when the metadata for the given audio file has finished downloading.  Passed the event.


This is especially useful if you need access to read-only attributes of the audio tag such as `buffered` and `played`.  See the [audio tag documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio) for more on these attributes.