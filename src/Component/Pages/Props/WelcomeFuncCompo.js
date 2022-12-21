import React from 'react';

// function WelcomeFuncCompo(props) {
//     return (
//         <div className='App'>
//             <h1> Congratulation!!! {props.EmpName} , Welcome to {props.companyName}</h1>
//             {props.children}
//         </div>
//     );
// }

// Another way to write the funtioon component code

const WelcomeFuncCompo = props =>{
    console.log(props)
   return ( 
   <div>
   <h1>Congratulation!!! {props.EmpName} , Welcome to {props.companyName} </h1>
   {props.children}
   </div>);
}
export default WelcomeFuncCompo;