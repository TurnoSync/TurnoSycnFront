import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepOne.css';
import FormInput from '../../../../components/professional/FormInput/FormInput';
import Button from '../../../../components/professional/Button/Button';
import illustrationImage from '/public/assets/illustration.png';

const StepOne = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e: { target: { value: string; }; }) => {
    const value = e.target.value.replace(/\D/g, ''); // Reemplaza caracteres no numéricos
    setPhoneNumber(value);
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    navigate('/professional/register/step-two');
  };

  return (
    <div className="step-one-background">
      <div className="step-one-container">
        <div className="form-container">
          <h1>TurnoSync <span>For Business</span></h1>
          <h2>Create a new business account</h2>
          <p>Fill in your details to get started with TurnoSync</p>
          <form onSubmit={handleSubmit}>
            <FormInput label="Name" type="text" placeholder="Enter your name" />
            <FormInput label="Last name" type="text" placeholder="Enter your last name" />
            <div className="phone-input-wrapper">
              <label htmlFor="phone-number" className="phone-label">Phone Number</label>
              <div className="phone-input">
                <select className="country-code" defaultValue="+57">
                  <option value="+57">+57</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="text"
                  id="phone-number"
                  className="phone-number-input"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>
            <FormInput label="Password" type="password" placeholder="Enter your password" />
            <FormInput label="Email" type="email" placeholder="Enter your email" />
            <Button text="Signup now" />
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I agree to the <span>Privacy Policy, Terms of Services</span> and <span>Business Terms</span>.
              </label>
            </div>
          </form>
        </div>
        <div className="illustration">
          <img src={illustrationImage} alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
