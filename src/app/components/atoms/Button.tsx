import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={onClick}>
    {label}
  </button>
);

export default Button;