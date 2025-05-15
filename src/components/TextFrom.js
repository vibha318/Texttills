import React, { useState } from 'react';


export default function TextForm(props) {
  const [text, setText] = useState(''); // Start with empty text

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    console.log("Uppercase was clicked" + text);
    setText(newText);
    props.showAlert("Converted to uppercase!","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    console.log("Lowercase was clicked" + text);
    setText(newText);
    props.showAlert("Converted to lowercase!","success");
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy Texts!","success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Spaces!","success");
  };


   const handleClearClick = () => {
  let newText = '';
  console.log("Clear Text was clicked");
  setText(newText);
  props.showAlert("Clear all text!","success");
};


  
  return (
    <>
    <div className="Container" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1> {/* Only heading, no text */}
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="10"
          onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'#042743'}}
          placeholder="Enter text here" // ✅ Placeholder instead of default state
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
      
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
