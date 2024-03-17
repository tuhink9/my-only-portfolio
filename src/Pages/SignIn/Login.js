import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h2>login</h2>
            <Link to='/signup'>New?Create Account</Link>
        </div>
    );
};

export default Login;