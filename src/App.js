import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const toggleMode = () =>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "#343a40"
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled","success");
    }
  }


  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} title="Kaustav" aboutText="About"/> 
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/" element={<TextForm heading="Enter your text" mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
