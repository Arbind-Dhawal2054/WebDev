import React, { useState } from 'react';

export default function DynamicFormHandling() {
  const [currentValue, setValue] = useState({
    username: '',
    email: '',
    password: '',
  });

  let handleInput = (event) => {
    const { name, value } = event.target;

    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  function clickSubmit() {
    console.log(
      `Submitted, name - ${currentValue.username}, email - ${currentValue.email} with password`
    );
  }

  function clickReset() {
    setValue({ username: '', email: '', password: '' });
  }

  return (
    <>
      <h1 className="my-3">Input Form</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            name="username"
            className="form-control my-3"
            id="floatingUsername"
            placeholder="Username"
            value={currentValue.username}
            onChange={handleInput}
            autoComplete="current-username"
          />
          <label htmlFor="floatingUsername">Username</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="majakaro@example.com"
            value={currentValue.email}
            onChange={handleInput}
          />
          <label htmlFor="floatingInput">Email</label>
        </div>

        <div className="form-floating">
        <input 
            type="password" 
            name="password" 
            className="form-control my-3" 
            id="floatingPassword" 
            placeholder="Password" 
            value={currentValue.password} 
            onChange={handleInput}
            autoComplete="current-password"
        />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="btn-container">
          <button
            className="btn btn-success"
            type="button"
            onClick={clickSubmit}
          >
            Submit
          </button>

          <button
            className="btn btn-danger mx-3"
            type="button"
            onClick={clickReset}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
}


/* import React, { useEffect } from 'react';
import axios from 'axios';

function DynamicFormHandling() {
  useEffect(() => {
    // Make an API request to your backend server
    axios.get('https://studious-space-dollop-695w5r47576wfrwx7-5000.app.github.dev/api')
  .then(response => {
    console.log(response.data); // Should log the response from your backend
  })
  .catch(error => {
    console.error('There was an error!', error);
  });

  }, []);

  return (
    <div>
      <h2>Data from Backend</h2>
      <p>Check the console for the response from the backend.</p>
    </div>
  );
}

export default DynamicFormHandling; */
