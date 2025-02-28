import React, { useState } from 'react'

export default function Doubleform() {
    const[Currentvalue, setValue] = useState({Name:'', Age: '', Contact: ''});

    let handleChange =(event)=>{
        setValue(prev=>({...prev, [event.target.name]: event.target.value}));
    }

    let resetvalues = ()=>{
        setValue({Name:'', Age: '', Contact: ''});
    }

        /*  let nameFun = (event)=>{
                setName(event.target.value);
            }
            const[age, setAge] = useState();

            let ageFun = (event)=>{
                setAge(event.target.value);
            } */
  return (
    <>
        <div className="form-floating mb-3">
            <input type="text"  name="Name" className="form-control my-3" id="floatingName" value={Currentvalue.Name} onChange={handleChange} placeholder="Enter Name"/>
            <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating">
            <input type="text"  name="Age" className="form-control my-3" id="floatingAge" value={Currentvalue.Age} onChange={handleChange} placeholder="Age"/>
            <label htmlFor="floatingAge">Age</label>
        </div>
        <div className="form-floating">
            <input type="text" name="Contact" className="form-control" id="floatingContact" value={Currentvalue.Contact} onChange={handleChange} placeholder="Contact"/>
            <label htmlFor="floatingContact">contact</label>
        </div>
        <button className='btn btn-danger my-3' onClick={resetvalues}>Reset</button>


        <div className="my-3">
            <p>Hello, {Currentvalue.Name} your age is {Currentvalue.Age} and your contact number is {Currentvalue.Contact}</p>
        </div>
    </>
  )
}
