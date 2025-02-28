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
