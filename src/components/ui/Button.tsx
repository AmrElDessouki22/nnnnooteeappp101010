'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="bg-primary text-white p-2 rounded" {...props}>
      {label}
    </button>
  );
};

export default Button;
