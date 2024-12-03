import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, Link} from 'react-router-dom';

export default function LoginPage(){ 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  const ProceedLogin = (e) => {
    e.preventDefault();
    if(validation()){

      fetch(`http://localhost:3000/users?email=${email}`).then((res)=>{
        if (!res.ok) {
          throw new Error('Failed to fetch');
      }
      return res.json();

      }).then((resp)=>{
        console.log(resp);

        if (resp.length === 0){
          alert('Please enter valid user');
        }else {
          let found = false; 
          for (let i = 0; i < resp.length; i++) {
            const user = resp[i];
        
            if (user.password === password) {
              navigate('/AddedRecipes');
              found = true;
              break; 
            }
          }
        
          if (!found) {
            alert('Please enter valid credentials');
          }
        }
        
        
        //else {
        //   resp = 0;
        //   while(resp<Object.length){
        //     if (resp.password === password) {
              
        //       navigate('/AddededRecipes');
        //    } else {
        //          alert('Please enter valid credentials');
        //       }
        //    }
        // }
      }).catch((err)=>{
        alert('Login failed due to : '+err.message);
      });

    }
  };

  const validation=()=>{
  let result =true;
  if(email === '' || email === null){
    result = false;
    alert("Please enter your email");
  }
  if(password === '' || password === null){
    result = false;
    alert("Please enter your name");
  }
  return result;
  }

    return(
        <div className="loginpage">
            <div className="container text-center">
  <div className="row">
    <div className="col">
    <img src="recipe-app-img.jpg" alt="recipe img" width="400px" height="500"/>
    </div>
    <div className="col">
      <h1>Log in</h1>
      <form onSubmit={ProceedLogin}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={password} type="password" className="form-control" id="inputPassword1" onChange={(e) => setPassword(e.target.value)} />
  </div>
  <button type="submit" className="btn btn-primary" onClick={ProceedLogin}>Submit</button>
</form>
<Link to="RegistrationPage">Don't have an account : Sign Up</Link>
    </div>
  </div>
</div>
        </div>
    );
}


// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate, Link} from 'react-router-dom';

// export default function LoginPage(){ 
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");


//   const ProceedLogin = (e) => {
//     e.preventDefault();
//     if(validation()){

//       fetch("http://localhost:3000/user/"+email).then((res)=>{
//         return res.json();
//       }).then((resp)=>{
//         console.log(resp);
//         if(Object.keys(resp).length === 0){
//           alert('Please enter valid user');
//         }else{
//           if(resp.password === password){
//             navigate('/src/pages/HomePage.jsx');
//           }else{
//             alert('Please enter valid credentails');
//           }
//         }
//       }).catch((err)=>{
//         alert('Login failed due to : '+err.message);
//       })

//     }
//   }

//   const validation=()=>{
//   let result =true;
//   if(email === '' || email === null){
//     result = false;
//     alert("Please enter your email");
//   }
//   if(password === '' || password === null){
//     result = false;
//     alert("Please enter your name");
//   }
//   return result;
//   }

//     return(
//         <div className="loginpage">
//             <div className="container text-center">
//   <div className="row">
//     <div className="col">
//     <img src="recipe-app-img.jpg" alt="recipe img" width="400px" height="500"/>
//     </div>
//     <div className="col">
//       <h1>Log in</h1>
//       <form onSubmit={ProceedLogin}>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input value={email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input value={password} type="password" className="form-control" id="inputPassword1" onChange={(e) => setPassword(e.target.value)} />
//   </div>
//   <button type="submit" className="btn btn-primary" onClick={ProceedLogin}>Submit</button>
// </form>
// <Link to="RegistrationPage">Don't have an account : Sign Up</Link>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// }














