import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<inputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="" id={name} {...rest} />
    </div>
  );
}

export default Input;