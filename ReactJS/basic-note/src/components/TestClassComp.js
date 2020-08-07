import React from 'react';

export class TestClassComp extends React.Component {
    constructor() {
        super();
        this.data = [1, 2, 3, 4, 5];

    }
    render() {

        const data2 = 'Hello'
        return (
            <h2>{this.data} {data2}</h2>
        )
    }
}