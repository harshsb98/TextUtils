
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import React, {useState} from 'react';

function App() {

  const [mode,setmode]= useState('light');

  const toggleMode= () =>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor="#212525"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor="white";
    }
  }

  return (
    <>
  <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
  <div className="container my-3">
   <TextForm heading="Enter the text to analyze below" mode={mode}/> 
  {/*<About />*/}
  </div>
  </>
  );
}

export default App;
