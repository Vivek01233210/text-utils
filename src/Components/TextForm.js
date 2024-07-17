import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "new text"
  // setText("new text"); mx-3 my-1
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.alertMessage('Converted to Uppercase', 'success')
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertMessage('Converted to Lowercase', 'success')
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.alertMessage('Text Cleared!', 'success')
  };

  const handleReverseClick = () => {
    let newText = text.split(" ").reverse().join(" ");
    setText(newText);
    props.alertMessage('Text Reversed!', 'success')
  };

  const handleCopyClick = () => {
    // var text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.alertMessage('Text copied to clipboard!', 'success');
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  let item = text.split(/\s+/);
  let i = 0;
  let j = 0;
  for (let word of item) {
    if (word !== "") {
      i++;
    };
    for (let char of word) {
      if (char !== "") {
        j++;
      };
    }
  }

  return (
    <>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              style={{ backgroundColor: props.mode === 'dark' ? '#413e6c' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
              className="form-control"
              id="myBox"
              rows="4"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleReverseClick}>
            Reverse Text
          </button>
          <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleCopyClick}>
            Copy Text
          </button>
        </div>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your Text Summary: </h1>
        <p>
          {i} words and {j} characters.
        </p>
        <p>
          This will take about{" "}
          {(0.8 / 100) * i} minutes to read.
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
    </>
  );
}
