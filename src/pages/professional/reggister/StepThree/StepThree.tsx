import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StepThree.css';
import FormInput from '../../../../components/professional/FormInput/FormInput';
import Button from '../../../../components/professional/Button/Button';

const StepThree = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate('/final-page');
  };

  return (
    <div className="step-three-container">
      <h2>Please indicate the address of your center</h2>
      <p>Add your business location so customers can easily find you.</p>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label="What is the location of your business?" 
          type="text" 
          placeholder="Enter your business address" 
        />
        <div className="checkbox-container">
          <input type="checkbox" id="no-address" />
          <label htmlFor="no-address">
            My business does not have a physical address (I only offer services by phone and online)
          </label>
        </div>
        <Button text="Finalizar" />
      </form>
    </div>
  );
};

export default StepThree;
