import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return (
            <div className='App'>
                <h1> Congratulation!!! {this.props.EmpName} , Welcome to {this.props.companyName}</h1>
            </div>
        );
    }
}

export default Welcome;