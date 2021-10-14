import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='login-form container d-flex justify-content-center align-items-center'>
        <div>
        <h2>Register</h2>
        <form>
            <label>Email</label>
            <br/>
            <input type='email' />
            <br/>
            <label>Password</label>
            <br/>
            <input type='password' />
            <br/>
            
            <label>Re Enter Password</label>
            <br/>
            <input type='password' />
            <br/>
            <input type='submit' value='submit' />
            </form>
            <p>Already have an account? <Link to='/login'>Login
            </Link></p>
            <div>-----------or---------</div>
            <button type='submit' className=' btn-warning p-1 rounded'>Sign In with Google</button>
        </div>  
    </div>
    );
};

export default Register;