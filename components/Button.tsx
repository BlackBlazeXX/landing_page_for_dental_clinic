import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  disabled = false 
}) => {
  const baseStyles = "px-8 py-4 rounded-full font-medium transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_30px_-10px_rgba(37,99,235,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-0",
    secondary: "bg-slate-900 text-white hover:bg-black shadow-[0_10px_20px_-5px_rgba(15,23,42,0.3)] hover:shadow-[0_20px_30px_-10px_rgba(15,23,42,0.4)] hover:-translate-y-1 active:scale-95 active:translate-y-0",
    outline: "bg-transparent border-2 border-slate-200 text-slate-900 hover:border-slate-900 hover:bg-slate-50 hover:-translate-y-0.5 active:scale-95 active:translate-y-0"
  };

  return (
    <button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;