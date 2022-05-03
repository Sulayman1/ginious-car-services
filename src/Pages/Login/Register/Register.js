import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const navigateLogin = (event) => {
        event.preventDefault();
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(event.target.email.value);
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center', marginTop: '30px' }}>please Register.......</h2>
            <form onSubmit={handleRegister} action="">
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