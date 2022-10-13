import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex h-12 w-full items-center gap-3 rounded bg-gray-800 py-4 px-3 ring-indigo-700 focus-within:ring-2">
      {children}
    </div>
  );
}

interface TextInputIconProps {
  children: ReactNode;
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="h-6 w-6 text-gray-500">{children}</Slot>;
}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({ ...props }: TextInputInputProps) {
  return (
    <input
      className="flex-1 bg-transparent text-gray-100 outline-none selection:bg-transparent placeholder:text-gray-500"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
