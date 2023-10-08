// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode = 'light'
      document.body.style.background = 'black';
    }
    else{
      setMode = 'dark'
      document.body.style.background = 'white';
    }
  }
  return (
    <>
      <Navbar title= "TextUtils2" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <div className="container my-3">
      <TextForm heading= "Enter the text to analyze below"/>
      </div>
      
    </>
  );
}

export default App;
