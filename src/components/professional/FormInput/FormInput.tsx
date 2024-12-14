// FormInput.tsx
import React from 'react';
import './FormInput.css';

interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  disabled?: boolean; // Se añade la propiedad disabled
}

const FormInput: React.FC<FormInputProps> = ({ 
  label, 
  type, 
  placeholder, 
  value, 
  onChange, 
  readOnly, 
  disabled // Se añade disabled como parámetro destructurado
}) => (
  <label>
    {label}
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      readOnly={readOnly} 
      disabled={disabled} // Se pasa al input
    />
  </label>
);

export default FormInput;
