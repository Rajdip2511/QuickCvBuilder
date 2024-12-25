import React, { useState, useEffect, useRef } from 'react';
import './SignUpForm.css';

const SignUpForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const formRef = useRef(null); // Reference to the form element

  // Detect click outside the form to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeForm(); // Close the form when clicking outside
      }
    };

    // Add event listener to document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', formData);
    // Add your sign-up logic here (e.g., sending data to an API)

    // After submission, close the form
    closeForm();
  };

  return (
    <div className="signup-form">
      <div className="form-container" ref={formRef}>
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
