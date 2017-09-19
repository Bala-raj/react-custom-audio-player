import React from 'react';

import MyComponent from '../src/index';
import '../src/style.scss';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state ={}

        this.onChange = this.onChange.bind(this);
        this.onLoad = this.onLoad.bind(this);
        this.onClickOfSong = this.onClickOfSong.bind(this);
    }

    onChange(e) {
        this.setState({
            input: e.target.value,
        })
    }

    onLoad() {
        this.setState({ url : this.input.value})
    }

    onClickOfSong(e) {
        this.setState({url: e.target.dataset.url})
    }

    render() {
        const { url, input } = this.state;
        return (
            <center>
                <div style={{margin: "30px"}}>
                <input ref={(c) => (this.input = c)}  type="text" value ={input} /> <button onClick={this.onLoad}> Load </button>
                <hr />
                <ul>
                    <li onClick={this.onClickOfSong} data-url="https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/59305add197aea69127bb033/1496341318490/10.+Kuthu+Fire+Mix+6.mp3">Kuthu Fire Mix</li>
                    <li onClick={this.onClickOfSong} data-url="https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/5548dc18e4b0b0a763d06e89/1430838296099/09+Ashai+Mugam+-+ft.+Vidya+Vandana.mp3">Ashai Mugam</li>                    
                </ul>

                </div>

                <MyComponent src={ url } />
            </center>
        )
    }
}

export default Example;