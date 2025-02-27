import React from 'react'


export default function DynamicGreeting({name}) {
  function doGreetings(username)
  {
    alert(`Hello : ${username}`);
  }

  return (
    <>
    <h1>Greetings</h1>
    <div className="form-floating">
         <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
         <button type="button" className="btn btn-success mb-3" onClick={()=> doGreetings(name)}>Greetings</button>
    </div>

    </>
  );
}
