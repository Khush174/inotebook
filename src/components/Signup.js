import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""}) 
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password,} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            props.showAlert("Account created successfully", "Success")
        }
        else{
            props.showAlert("invalid credentials", "error")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
  return (
    <div className='container mt-2'>
        <h2 className='my-3'>Create an account </h2>
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp"/>
   </div>
   <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" name='email' onChange={onChange} aria-describedby="emailHelp"/>
   </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password" name= "password" onChange={onChange} minLength={5} required/>
   </div>
   <div className="mb-3">
    <label htmlFor="CPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="CPassword" name='cpassword' onChange={onchange} minLength={5} required/>
   </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>
    </div>
  )
}

export default Signup
