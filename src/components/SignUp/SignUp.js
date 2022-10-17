import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>SignUp</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" placeholder='Please Enter Your Email.' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='Please Enter Your Password.' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" placeholder='Please Enter Your Password.' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>Already Have an Account?<samp><Link to="/login"> Create a New Account</Link></samp></p>
        </div>
    );
};

export default SignUp;