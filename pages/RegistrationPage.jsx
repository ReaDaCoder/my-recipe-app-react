import React, { useState } from 'react';
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate, Link} from 'react-router-dom';

export default function RegistrationPage(){
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    const postData = () =>{
      axios.post('http://localhost:3000/users', {
        name,
        surname,
        email,
        password,
        confirmPassword
      }).then((res)=>{
        alert('Registered Successfully')
        navigate('/HomePage');
      }).catch((err)=>{
        alert('Failed to register user due to :'+ err.message);
      });

    }
    
      const [error, setError] = useState("");
    
    
    
      function AddUser(ev) {
        ev.preventDefault();
        let details = {name, surname, email, password, confirmPassword};
        console.log(details);
        postData();
      
      }
    
    return(
        <div>
            <div className="signup-box">
      <h1>Sign up</h1>
      <form onSubmit={AddUser}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br/>
        <input
          type="text"
          name="surname"
          placeholder="Last Name"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        /><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br/>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        /><br/>
        <div className="card">
                                <img src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1" alt="User" width="150px"/>
                                <input type="file" accept="image/JPEG, image/png, image/jpg" id="input-file" />
                                <label htmlFor="input-file" id="update-img">Update</label>
                            </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
    </div>
        </div>
    );
}


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

