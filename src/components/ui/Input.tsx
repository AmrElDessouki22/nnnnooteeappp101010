'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold mb-1">{label}</label>
      <input className="border p-2 w-full" {...props} />
    </div>
  );
};

export default Input;
