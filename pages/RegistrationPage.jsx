import React, { useEffect, useState } from "react";
function RegistrationPage(){
    const [addUser, setAddUser] = useState();

    useState(()=>{
        const data = window.AbortControllerlocalStorage.getItem('NEW_USER');
        if(data !== null) setAddUser(JSON.parse(data))
    },[])

    useEffect(()=>{
        window.localStorage.setItem('NEW_USER', JSON.stringify(addUser))
    },[addUser])

    const registerUser = (ev) => {
        ev.preventDefault();
        let user = {
            name: ev.target.form.name.value,
            surname: ev.target.form.surname.value,
            email: ev.target.form.email.value,
            cell: ev.target.form.password.value
        };
        setAddUser([...addUser, addUser]);
        console.warn('added', { addUser: [...addUser, addUser] });

        ev.target.form.reset();
    }
    if (!name || !surname || !email || !password) {
        setError('All fields are required.');
        return;
      }
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        setError('Invalid email format.');
        return;
      }
  
      const user = { name, surname, email, password: encryptPassword(password) };
    return(
        <div className="signup-box">
            <h1>Sign up</h1>
            <form>
                <input type="text" placeholder="First Name"/><br/>
                <input type="text" placeholder="Last Name"/><br/>
                <input type="text" placeholder="Email"/><br/>
                <input type="text" placeholder="Password"/><br/>
                <input type="text" placeholder="Confirm Password"/><br/>
                <button onClick={registerUser}>Sign Up</button>
            </form>
        </div>
    );
}

export default RegistrationPage