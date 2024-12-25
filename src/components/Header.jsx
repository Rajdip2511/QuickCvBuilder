import React, { useState } from 'react';
import SignUpForm from './SignUpForm'; // Importing the SignUpForm
import './Header.css';

const Header = () => {
  const [isSignUpFormVisible, setSignUpFormVisible] = useState(false);

  // Function to toggle the visibility of the SignUpForm
  const toggleSignUpForm = () => {
    setSignUpFormVisible(!isSignUpFormVisible);
  };

  return (
    <div className="header-container">
      <div className="header">
        <button className="signup-button" onClick={toggleSignUpForm}>
          Sign Up
        </button>
      </div>

      {/* Conditionally rendering the SignUpForm */}
      {isSignUpFormVisible && (
        <SignUpForm closeForm={toggleSignUpForm} />
      )}
    </div>
  );
};

export default Header;
