import React from 'react';

const header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo">
            <h3>LOGO</h3>
        </div>
        <div className="menu">
            <span>Home</span>
            <span>About</span>
            <span>Contact</span>
        </div>
        <div className="buttons">
            <button type="button" className="btn btn-primary">Register</button>
            <button type="button" className="btn btn-danger">Log In</button>
        </div>
      </nav>
    </header>
  );
}

export default header;
