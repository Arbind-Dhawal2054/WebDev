import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("");

    const onChangehandle = (event) => {
        setText(event.target.value);
    };

    const clickUpHandle = () => {
        setText(text.toUpperCase());
    };

    const clickLoHandle = () => {
        setText(text.toLowerCase());
    };

    const removeExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    };

    const clearText = () => {
        setText("");
    };

    const wordCount = text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    const charCount = text.length;

  return (
    <>
        
        <div className="mb-3 my-5">
        <h1>{props.heading}</h1>
            <textarea  className="form-control my-3" value={text} onChange={onChangehandle} id="Textarea1" rows="8"></textarea>
            <button type="button" className="btn btn-primary mx-1" onClick={clickUpHandle}>To Upper Case</button>
            <button type="button" className="btn btn-primary mx-1" onClick={clickLoHandle}>To Lower Case</button>
            <button type="button" className="btn btn-secondary mx-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-success mx-1" onClick={copyToClipboard}>Copy Text</button>
            <button type="button" className="btn btn-danger mx-1" onClick={clearText}>Clear Text</button>
        </div>

        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{wordCount} words and {charCount} characters</p>
            <p>{0.008 * wordCount} minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
