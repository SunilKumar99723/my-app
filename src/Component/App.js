import './App.css';
// import CustomerDetails from './Pages/Customer/CustomerDetails';
// import HeaderDetails from './Pages/Header/HeaderDetails';
// import ButtonApp from "./Pages/RadioButton/ButtonApp";
// import ParentAsClass from "./Pages/ParentToChildAsClass/ParentAsClass";
// import ParentAsFunction from "./Pages/ParentToChildAsFunction/ParentAsFunction";
// import ChildToParent from "./Pages/ChildToParentDataPassing/ChildToParent";
// import Background from "./Image/Bike.jpg";
import WelcomeClassComp from './Pages/Props/WelcomeClassComp';
import WelcomeFuncCompo from './Pages/Props/WelcomeFuncCompo';
import SetStateExampleCounter from './Pages/State/SetStateExampleCounter';
import WelcomeClassCompUsingState from './Pages/State/WelcomeClassCompUsingState'; 


// C:\Users\sunil\source\repos\reactproject1\my-app\src\Component\Pages\ChildToParentDataPassing\ChildToParent.js

function App() {
  return (
    // <div style={{backgroundImage: "url(" + Background + ")",  height:'100vh',
    // marginTop:'-70px',
    // fontSize:'50px',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',}}>
    <div> 
   {/*   <HeaderDetails jt="Jharkhand Tourism"/>
      <CustomerDetails/>
      <ButtonApp/>
      <ParentAsClass/>
      <ParentAsFunction/>
      <ChildToParent/>  */}

      {/* How to use props and how to pass property valuse using props? */}
      {/* Props example in class component */}
      <WelcomeClassComp  EmpName='Mukesh' companyName ="Oracle"/>
      <WelcomeClassComp  EmpName='Vikash' companyName ="Sony"/>
      <WelcomeClassComp  EmpName='Khusbu' companyName ="Google"/> 
      <br/>
      {/* Props example in Functional component  */}
      <WelcomeFuncCompo  EmpName='Sanjay' companyName ="Society General"> <p> This is children props</p> </WelcomeFuncCompo>
      <WelcomeFuncCompo  EmpName='Savi' companyName ="E & Y"> <button> Button</button> </WelcomeFuncCompo>

      {/* How to use state and how to pass message valuse using state within class by using 'setState method'? */}
      <WelcomeClassCompUsingState/>

      {/* use of setState method */}
      <SetStateExampleCounter/>

    </div>

    
  );
}

export default App;
