import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {singInUsingGoogle}=useAuth();
    const location= useLocation();
    const history=useHistory();
    const redirect_uri=location.state?.from ||'/home';
    
    const handleSingInUsingGoogle=()=>{
        singInUsingGoogle()
        .then(result=>{
            history.push(redirect_uri);
            
        })
             
    }
    
    return (
        <div className='container d-flex justify-content-center align-items-center'>
        <div className='form-area '>
        <h2>Login</h2>
        <form>
            <label>Email</label>
            <br/>
            <input type='email' placeholder='Enter your email' />
            <br/>
            <label className='mt-2'>Password</label>
            <br/>
            <input type='password' placeholder='Enter your password' />
            <br/>
            <input type='submit' value='submit' className='mt-2 btn btn-success' />
            </form>
            <p>New to Burj-Al-Arab? <Link to='/register'>create new account.
            </Link></p>
            <div>-----------or---------</div>
            <button type='submit' className=' btn-warning p-1 rounded' onClick={handleSingInUsingGoogle}>Sign In with Google</button>
        </div>
        
    </div>
    );
};

export default Login;