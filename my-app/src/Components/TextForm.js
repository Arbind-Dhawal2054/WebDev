import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState();
    const onChangehandle = (event)=>{
        setText(event.target.value)        
    }

    const clickUpHandle = ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const clickLoHandle = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
         <div className="mb-3 my-3" >
            <textarea className="form-control my-3" value={text} onChange={onChangehandle}  id="Textarea1" rows="8"></textarea>
            <button type="button" class="btn btn-primary" onClick={clickUpHandle} >To Upper Case</button>
            <button type="button" class="btn btn-primary mx-2" onClick={clickLoHandle} >To Lower Case</button>
            
        </div>
    </div>
    <div className="container mx-0">
        <h2>Text Summary</h2>
        
    </div>
    </>
  )
}
