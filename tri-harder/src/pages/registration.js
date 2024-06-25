
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/registration.css'
import emailjs from 'emailjs-com';
import NavBar from '../components/navBar';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    time: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      time: formData.time,
      message: JSON.stringify(formData),
    };

    emailjs.send(
      'service_udga989', // Replace with your EmailJS service ID
      'template_zfzfh0d', // Replace with your EmailJS template ID
      templateParams,
      'hPQMKbUfaX7z2aBSi' // Replace with your EmailJS user ID (public key)
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text, templateParams);
      alert('Form submitted successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Form submission failed. Please try again.');
    });
  };

  return (
    <>
    <NavBar/>
      <div className="container">
        <h2 className="mt-5">Registration Form</h2>
        <form id="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Intended Finish Time:</label>
            <input
              type="text"
              className="form-control"
              id="time"
              name="time"
              placeholder="Enter your intended finish time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
