import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" >Tuhin Kabir</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link className='home' to="/">Home</Link>
        <Link className='services' to="/services">Services</Link>
        <Link className='experiences' to="/experiences">Experinces</Link>
        <Link className='about' to="/about">About</Link>
        <Link className='contact' to="/contact">Contact</Link>
        <Link className='login' to='/login'>SignIn</Link>
      </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;