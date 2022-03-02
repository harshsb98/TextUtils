
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setmode]= useState('light');
  const [alert,setalert] =useState(null);

  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(
      ()=>{
        setalert(null);
      },1600
    );
  }

  const toggleMode= () =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#212525"
      showalert("Dark mode has been enabled", "success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
      showalert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
  <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route> 
          <Route exact path="/"element={<TextForm heading="Enter the text to analyze below" mode={mode} alert={alert} showalert={showalert} /> }>
          </Route>
        </Routes> </div>
</Router>
 
  </>
  );
}

export default App;
