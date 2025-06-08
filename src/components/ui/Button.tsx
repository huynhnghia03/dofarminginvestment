import { FC, ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;