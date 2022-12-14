import React from 'react';

export default function Footer() {
    return (
      <footer className="bg-dark text-white p-3 text-center">
        <div className="container">
          <p>
            &copy; 2022 All Right Reserved By &nbsp;
            <a href="/">PhysioCare</a>
          </p>
          <p>
            <i className="ri-facebook-circle-fill display-5 text-primary"></i>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <i className="ri-twitter-fill display-5 text-info"></i>
            &nbsp;&nbsp; &nbsp;&nbsp;
            <i className="ri-instagram-fill display-5 text-danger"></i>
          </p>
        </div>
      </footer>
    );
}
