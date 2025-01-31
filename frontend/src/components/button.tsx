import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button className={"flex rounded-full bg-primary px-8 py-2 text-white hover:opacity-80 transition-opacity "+ className} {...props}>
      {children}
    </button>
  );
};

export default Button;

const CircleButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button
      className={'flex rounded-full bg-primary px-4 py-1 sm:px-8 sm:py-2 text-white hover:opacity-80 transition-opacity ' + className}
    >
      {children}
    </button>
  );
};

export { CircleButton };
