import React, { useState } from 'react';
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function RegistrationPage() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const AddUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const newUser = { name, surname, email, role, password, confirmPassword };

    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);
    localStorage.setItem('password', password);
    localStorage.setItem('confirmPassword', confirmPassword);

    // Send data to the backend
    axios.post("http://localhost:3000/users", newUser)
      .then(() => {
        console.log("User registered successfully!");
        // Clear the form fields after successful registration
        setName('');
        setSurname('');
        setEmail('');
        setRole('');
        setPassword('');
        setConfirmPassword('');
        setError(''); // Reset error
      })
      .catch((error) => console.error("Error registering user:", error));
  };

  return (
    <div className="signup-box">
      <h1>Sign up</h1>
      <form onSubmit={AddUser}>
        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Last Name"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br />
        <div className="card">
          <img
            src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1"
            alt="User"
            width="150px"
          />
          <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" />
          <label htmlFor="input-file" id="update-img">Update</label>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegistrationPage;



  // function AddUser(ev) {
  //   ev.preventDefault();
  //   if (user.password !== user.confirmPassword) {
  //     setError("Passwords do not match!");
  //     return;
  //   }
  //   setError("");
  //   console.log("User registered:", user);
  //   setUser({
  //     name: "",
  //     surname: "",
  //     email: "",
  //     role:"",
  //     password: "",
  //     confirmPassword: "",
  //   });
  // }

