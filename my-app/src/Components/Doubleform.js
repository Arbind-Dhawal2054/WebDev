import React, { useState } from 'react'

export default function Doubleform() {
    const[name, setName] = useState('');

    let nameFun = (event)=>{
        setName(event.target.value);
    }
    const[age, setAge] = useState();

    let ageFun = (event)=>{
        setAge(event.target.value);
    }
  return (
    <>
        <div class="form-floating mb-3">
            <input type="text" className="form-control my-3" id="floatingName" value={name} onChange={nameFun} placeholder="Enter Name"/>
            <label htmlFor="floatingInput">Name</label>
            </div>
            <div class="form-floating">
            <input type="text" className="form-control" id="floatingAge" value={age} onChange={ageFun} placeholder="Password"/>
            <label htmlFor="floatingAge">Age</label>
        </div>
        <div className="my-3">
            <p>Hello, {name} your age is {age}</p>
        </div>
    </>
  )
}
