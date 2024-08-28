import React from "react";
function RegistrationPage(){

    const userRegistration = (ev) => {
        ev.preventDefault();
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
                <button>Sign Up</button>
            </form>
        </div>
    );
}

export default RegistrationPage