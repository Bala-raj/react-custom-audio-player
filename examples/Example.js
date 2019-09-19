import React from 'react';

import MyComponent from '../src/index';
import {  DownloadIcon } from '../src/icons';
import '../src/style.scss';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLoader: true
        }

        this.onChange = this.onChange.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onClickOfSong = this.onClickOfSong.bind(this);
        this.onClickOfTest = this.onClickOfTest.bind(this);
        this.onPlayCB = this.onPlayCB.bind(this);
    }

    onChange(e) {
        this.setState({
            input: e.target.value,
        })
    }

    onLoad() {
        this.setState({ url: this.input.value })
    }

    onClickOfSong(e) {
        this.setState({ url: e.target.dataset.url })
    }

    onClickOfTest() {
        this.setState({ showLoader: false });
    }

    onPlayCB(e) {
        console.error(e);
    }

    render() {
        const { url, input, showLoader } = this.state;
        return (
            <center>
                <div>
                    <input ref={(c) => (this.input = c)} type="text" value={input} placeholder="URL to play" /> <button onClick={this.onLoad}> Load </button>
                    <hr />
                    <ul>
                        <li onClick={this.onClickOfSong} data-url="https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/59305add197aea69127bb033/1496341318490/10.+Kuthu+Fire+Mix+6.mp3">Kuthu Fire Mix</li>
                        <li onClick={this.onClickOfSong} data-url="https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/5548dc18e4b0b0a763d06e89/1430838296099/09+Ashai+Mugam+-+ft.+Vidya+Vandana.mp3">Ashai Mugam</li>
                    </ul>

                    <button onClick={this.onClickOfTest}>remove loader</button>

                </div>

                <MyComponent autoplay src={ url } customDownloadButton showSeekControls showPlaybackRate showLoader={showLoader} onMediaEvent={{ play: (e)=> {console.error(e)}}} showVolumeSlider showRemainingTime> <ReactDownload/> </MyComponent>
            </center>
        )
    }
}


 class ReactDownload extends React.Component {
    constructor(props) {
         super(props);
         this.state = { showLoader: false };

         this.downloadAudio = this.downloadAudio.bind(this);
    }

    downloadAudio() {
        this.setState({showLoader: true})
        setTimeout( () => {this.setState({ showLoader: false})},4000);
    }

    render() {
        return(<div className="btn download">{this.state.showLoader ? <div className="spinner"><img src='https://storage.googleapis.com/branddesignmanager/CWANewDesign/images/spinners.gif' /></div> : <i className="button" onClick={this.downloadAudio}><DownloadIcon /></i>}</div>)
    }
 }


export default Example;