import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import Validation from './LoginValidation'

function Login(){
const [values,setValues]=useState({
        email:' ',
        password:' '
})
const[error,setErrors]=useState

const handleInput=(event)=>{
        setValues(prev=> ({...prev,[event.target.name]:[event.target.value]})) 
}
const handleSubmit=(event)=>{
        event.preventDefault(); 
        setErrors(Validation(values));
}


  return (
    <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
        <div className='p-3 bg-white w-25' >
            <h2>Log In</h2>
            <form action="" onSubmit={handleSubmit}>
               
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder='Enter your email' name='email'
                     onChange={handleInput} className='form-control rounded-0'/>
                     { errors.email && <span> className='text-danger'{errors.email} </span>}
                </div>
                
                <div className='mb-3'>
                    <label htmlFor="password"> <strong>Password</strong> </label>
                    <input type="password" placeholder='Enter your password' name='password'
                    onChange={handleInput} className='form-control rounded-0'/>
                    { errors.password && <span> className='text-danger'{errors.password} </span>}
                </div>
               
                <button  type="submit" className='btn btn-success  w-100'> Log In </button>
               
                <p>Create account if You visit first time </p>
               
                <Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account </Link>
            </form>
        </div>
    </div>
  )
}

export default Login
