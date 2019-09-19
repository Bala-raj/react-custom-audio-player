import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent, { getExtensionFromType } from 'index';

describe('<index />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MyComponent />, div);
    });

});

describe('Filename manipulation', () => {
        
    test('Returns filename with the passed filetype as extension', () => {
    
        expect('https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/5548dc18e4b0b0a763d06e89/1430838296099/09+Ashai+Mugam+-+ft.+Vidya+Vandana' + getExtensionFromType('audio/wav')).toBe('https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/5548dc18e4b0b0a763d06e89/1430838296099/09+Ashai+Mugam+-+ft.+Vidya+Vandana.wav');
    
        expect('blob_http___localhost_8887_b252abdc-926c-4f8d-82c0-e99671e7bf59' + getExtensionFromType('audio/ogg')).toBe('blob_http___localhost_8887_b252abdc-926c-4f8d-82c0-e99671e7bf59.ogg');
    
        expect('9986c59b-4fd5-4925-a1f8-51fbadc6fd99_20180208T03:16_UTC' + getExtensionFromType('audio/mpeg')).toBe('9986c59b-4fd5-4925-a1f8-51fbadc6fd99_20180208T03:16_UTC.mp3');
    
    });

})

