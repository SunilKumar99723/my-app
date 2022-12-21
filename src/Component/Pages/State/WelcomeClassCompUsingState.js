import React, { Component } from 'react';

class WelcomeClassCompUsingState extends Component {
    constructor(){
        super()

        this.state = {
            companyName: 'BMW'
        }
    }
        message() {

            this.setState({

                companyName : 'Audi'
            })
        }

    
    render() {
        return (
            <div>
                <h1>  {this.state.companyName}</h1>
                <button onClick = {()=> this.message()}>Click for Message</button>
                
            </div>
        );
    }
}

export default WelcomeClassCompUsingState;