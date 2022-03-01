
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';

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
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
   <TextForm heading="Enter the text to analyze below" mode={mode} alert={alert} showalert={showalert} /> 
  {/*<About />*/}
  </div>
  </>
  );
}

export default App;
