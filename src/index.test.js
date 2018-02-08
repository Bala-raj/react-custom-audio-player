import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent, {getFileName} from 'index';

describe('<index />', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MyComponent />, div);
    });
});

test('Retrieve filename by removing the extension if exists...', () => {

    expect(getFileName('https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/5548dc18e4b0b0a763d06e89/1430838296099/09+Ashai+Mugam+-+ft.+Vidya+Vandana.mp3')).toBe('https://static1.squarespace.com/static/5547ab1ee4b0f235dbd475fc/5548268de4b0ec2ff50da4e9/5548dc18e4b0b0a763d06e89/1430838296099/09+Ashai+Mugam+-+ft.+Vidya+Vandana.');

    expect(getFileName('9986c59b-4fd5-4925-a1f8-51fbadc6fd99_20180208T03:16_UTC.wav')).toBe('9986c59b-4fd5-4925-a1f8-51fbadc6fd99_20180208T03:16_UTC.');

    expect(getFileName('9986c59b-4fd5-4925-a1f8-51fbadc6fd99_20180208T03:16_UTC')).toBe('9986c59b-4fd5-4925-a1f8-51fbadc6fd99_20180208T03:16_UTC');
    
});