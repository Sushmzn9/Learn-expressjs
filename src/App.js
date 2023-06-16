import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({});

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/demo", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <p>{JSON.stringify(form)}</p>

        <span>Username</span>
        <input type="text" name="username" onChange={handleForm} />

        <span>Password</span>
        <input type="password" name="password" onChange={handleForm} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
