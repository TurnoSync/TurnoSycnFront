import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StepOne.css';
import FormInput from '../../../../components/professional/FormInput/FormInput';
import Button from '../../../../components/professional/Button/Button';
import illustrationImage from '../../../../assets/illustration.png';

const StepOne = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
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
            <FormInput label="Phone Number" type="text" placeholder="+57 ▾ Enter your phone number" />
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
