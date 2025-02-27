import React from 'react'
import {useState} from 'react'

export default function Textbuttons() {
  const [count, setCount] = useState(0);
 
  let countIncrease =()=>{
   setCount( count+1);
    
  }
  let countDecrease =()=>{
    if(count > 0){
        setCount(count-1);
    }
    
  }

  return (
    <>
        <h1>Counter</h1>
        <div className="form-floating my-3">
        <textarea className="form-control my-3" placeholder="Write Here" id="floatingTextarea"></textarea>
        <button className='btn btn-primary' onClick={countIncrease}>Increase</button>
        <button className='btn btn-primary mx-1' onClick={countDecrease}>Decrease</button>
        <p>Count:{count}</p>
        </div>
    </>
  )
}
