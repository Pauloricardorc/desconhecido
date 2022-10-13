import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function ButtonAuth({ children, ...props }: ButtonIconProps) {
  return (
    <button
      className="flex h-11 w-11 items-center justify-center rounded bg-gray-100 ring-indigo-700 transition focus-within:ring-2 hover:bg-gray-300"
      {...props}
    >
      {children}
    </button>
  );
}
