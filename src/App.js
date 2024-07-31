import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';

const App = () => {
  // State variables for form inputs and errors
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Validation function for email
  const validateEmail = (email) => {
    // Simple regex to validate email
    return /\S+@\S+\.\S+/.test(email);
  };

  // Validation function for password
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  // Handle change for email input
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    // Validate email and update errors
    const newErrors = { ...errors };
    if (!validateEmail(newEmail)) {
      newErrors.email = 'Invalid email address';
    } else {
      newErrors.email = '';
    }
    setErrors(newErrors);
  };

  // Handle change for password input
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Validate password and update errors
    const newErrors = { ...errors };
    if (!validatePassword(newPassword)) {
      newErrors.password = 'Password must be at least 8 characters';
    } else {
      newErrors.password = '';
    }
    setErrors(newErrors);
  };

  // Handle change for confirm password input
  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    // Validate confirm password and update errors
    const newErrors = { ...errors };
    if (newConfirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    } else {
      newErrors.confirmPassword = '';
    }
    setErrors(newErrors);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!errors.email && !errors.password && !errors.confirmPassword) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form');
    }
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            id='email'
            value={email}
            onChange={handleEmailChange}
            style={{ borderColor: errors.email ? 'red' : 'initial' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={handlePasswordChange}
            style={{ borderColor: errors.password ? 'red' : 'initial' }}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor='confirmpassword'>Confirm Password:</label>
          <input
            type='password'
            id='confirmpassword'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            style={{ borderColor: errors.confirmPassword ? 'red' : 'initial' }}
          />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        </div>
        <Button type="submit" variant="contained">Sign Up</Button>
      </form>
    </div>
  );
};

export default App;