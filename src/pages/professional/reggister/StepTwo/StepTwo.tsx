import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StepTwo.css';
import FormInput from '../../../../components/professional/FormInput/FormInput';
import Button from '../../../../components/professional/Button/Button';

const StepTwo = () => {
  const navigate = useNavigate();

  // Estado para el nombre del negocio y la URL
  const [businessName, setBusinessName] = useState('');

  // Función para manejar el cambio en el nombre del negocio, filtrando caracteres no permitidos
  const handleBusinessNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value
      .replace(/[^a-zA-Z0-9\s]/g, '') // Permite solo letras, números y espacios
      .replace(/\s+/g, ' '); // Remueve espacios múltiples
    setBusinessName(name);
  };

  // Función para formatear el nombre del negocio en una URL válida
  const formatBusinessNameForURL = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-'); // Reemplaza espacios por guiones
  };

  return (
    <div className="step-two-container">
      <h2>What is the name of your business?</h2>
      <p>This is the business name that your customers will see. You can add the company name later.</p>
      <form>
        <FormInput 
          label="Business name" 
          type="text" 
          placeholder="Enter your business name" 
          value={businessName}
          onChange={handleBusinessNameChange}
        />
        
        <FormInput 
          label="Website" 
          type="text" 
          placeholder="www.turnosync.com/mi-nombre-de-tienda" 
          value={`www.turnosync.com/${formatBusinessNameForURL(businessName)}`}
          readOnly
        />
        
        <Button text="Continue" onClick={() => navigate('/professional/register/step-three')} />
      </form>
    </div>
  );
};

export default StepTwo;
