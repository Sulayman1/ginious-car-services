import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = (event) => {
        event.preventDefault();
        navigate('/login');
    }

    const registerSubmit = event => {
        event.preventDefault();
        console.log(event.target.email.value);
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center', marginTop: '30px' }}>please Register.......</h2>
            <form onSubmit={registerSubmit} action="">
                <input type="text" name='name' placeholder='your name' />
                <input type="email" name='email' placeholder='your email' required />
                <input type="password" name='password' placeholder='your password ' required />
                <input type="submit" name='register' />
                <p>Already Register? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login...</Link></p>
            </form>
        </div>
    );
};

export default Register;