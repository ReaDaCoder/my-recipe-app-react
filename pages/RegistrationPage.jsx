import React from "react"
function RegistrationPage(){
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
    )
}

export default RegistrationPage