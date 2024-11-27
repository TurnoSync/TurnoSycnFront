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
}

const FormInput: React.FC<FormInputProps> = ({ label, type, placeholder, value, onChange, readOnly }) => (
  <label>
    {label}
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      readOnly={readOnly} 
    />
  </label>
);

export default FormInput;
