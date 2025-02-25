import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Write here");
    const onChangehandle = (event)=>{
        setText(event.target.value)        
    }

    const clickUpHandle = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }

  return (
    <div>
        <h1>{props.heading}</h1>
         <div className="mb-3">
            <textarea className="form-control" value={text} onChange={onChangehandle}  id="Textarea1" rows="8" ></textarea>
            <button className="btn-primary" onClick={clickUpHandle}>ToUpper</button>
        </div>
    </div>
  )
}
