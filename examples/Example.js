import React from 'react';

import MyComponent from '../src/index';
import '../src/style.scss';

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state ={}

        this.onChange = this.onChange.bind(this);
        this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount() {
        console.log('test');
    }

    onChange(e) {
        this.setState({
            input: e.target.value,
        })
    }

    onLoad() {
        this.setState({ url : this.input.value})
    }

    render() {
        const { url, input } = this.state;
        return (
            <center>
                <div style={{margin: "30px"}}>
                <input ref={(c) => (this.input = c)}  type="text" value ={input} /> <button onClick={this.onLoad}> Load </button>
                </div>

                <MyComponent playlist={[{ url }]} hideBackSkip hideForwardSkip />
            </center>
        )
    }
}

export default Example;