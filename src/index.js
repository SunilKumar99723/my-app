import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Reducer from './Component/Pages/Reducer/Reducer';
/*import JK from './Component/Pages/JK';*/
/*
const root = ReactDOM.createRoot(document.getElementById('root'));*/
ReactDOM.render(
    <React.StrictMode>
               <App />  
               {/* <Reducer/>       */}
    </React.StrictMode>,
    document.getElementById('root')
);



