import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends Component {
    render() {
        const date = new Date();
        const hours = date.getHours();
        let text = '';

        if(hours >= 18 || hours <= 4) {
            text = 'こんばんは！';
        } else if(hours >= 12) {
            text = 'こんにちは！';
        } else {
            text = 'おはよう！';
        }

        return (
            <h1>{text}</h1>
        );
    }
}

if(document.getElementById('hello')) {
    ReactDOM.render(<Hello />, document.getElementById('hello'));
}