import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Upper case","success");
  }
  const handleLoClick = () =>{
    // console.log("Lowercase was clicked");
    let newtext2 = text.toLowerCase();
    setText(newtext2);
    props.showAlert("Converted to Lower case","success");
  }
  const handleClear = () =>{
    // console.log("clearText was clicked");
    // let newtext3 = text.toLowerCase();
    setText("");
    props.showAlert("Text cleared","success");
  }
  
  const handleOnChange = (event) =>{
    // console.log("On change");
    setText(event.target.value);
  }
  
  const empty = () =>{
  setText("");
  }


  const [text, setText] = useState("Enter text here");

  // text = "newtext"; //Wrong way to change the state
  // setText("Nex Text")    //Right way to change the state
  return (
<>
    <div className="container" style={{color: props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="Box" rows="10" value={text} onChange={handleOnChange} onClick={empty} style={{backgroundColor: props.mode==="dark"?"#343a40":"white", color: props.mode==="dark"?"white":"black"}} ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-4" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleClear}>Clear text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==="dark"?"white":"black"}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}mins: time taken to read</p>
    </div>
  </>
  );
}
