import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    countIncrement(){

        // only this line will increment the value in console but not in screen(UI)
            // this.state.count = this.state.count +1
            // console.log(this.state.count)

        //or To display the increment in screen use setState    
        // this.setState({
        //     count:this.state.count +1
        // })

       //or To display the increment in screen  and also in console (2nd parameter is callback function of setState method)
    //    this.setState({        
    //                     count:this.state.count +1
    //                  },() =>{console.log('callback value ', this.state.count)}
    //                 )

    // when you have to update state based on previous state value, pass in a function as an argument instead of the regular object.
        this.setState((prevState, props)=>({
            count: prevState.count + 1
        })) 
        console.log(this.state.count)

    }
    incrementFive(){
        this.countIncrement();
        this.countIncrement();
        this.countIncrement();
        this.countIncrement();
    }
    render() {
        return (
            <div>
                 <div> count - {this.state.count} </div>
                 {/* <button onClick={()=>this.countIncrement()}> Increment</button> */}
                 <button onClick={()=>this.incrementFive()}> Increment</button>
            </div>
           
        );
    }
}

export default Counter;