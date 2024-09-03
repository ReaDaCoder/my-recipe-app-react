import React, { useState } from "react";

function RegistrationPage() {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  function handleInputChange(ev) {
    const { name, value } = ev.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function AddUser(ev) {
    ev.preventDefault();
    
    // Basic form validation
    if (user.password !== user.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    
    // Clear any previous errors
    setError("");

    // Send user data to the server (mocked as a console log for now)
    console.log("User registered:", user);

    // Optionally, clear the form fields after submission
    setUser({
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  return (
    <div className="signup-box">
      <h1>Sign up</h1>
      <form onSubmit={AddUser}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={user.name}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="text"
          name="surname"
          placeholder="Last Name"
          value={user.surname}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleInputChange}
          required
        /><br/>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegistrationPage;








/*import React, { useEffect, useState } from "react";

function RegistrationPage(){
    const [addUser, setAddUser] = useState();

    function AddUser(ev){
        ev.preventDefault(ev);
        let user = {
            name: ev.target.form.name.value,
            surname: ev.target.form.surname.value,
            email: ev.target.form.email.value,
            cell: ev.target.form.password.value
        };
    }
return(
    <div className="signup-box">
        <h1>Sign up</h1>
        <form>
            <input type="text" placeholder="First Name"/><br/>
            <input type="text" placeholder="Last Name"/><br/>
            <input type="text" placeholder="Email"/><br/>
            <input type="text" placeholder="Password"/><br/>
            <input type="text" placeholder="Confirm Password"/><br/>
            <button onClick={AddUser}>Sign Up</button>
        </form>
    </div>
);


}
export default RegistrationPage*/