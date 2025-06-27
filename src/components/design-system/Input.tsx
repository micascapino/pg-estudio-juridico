import { ReactNode } from 'react';
import { Input as ShadcnInput } from '@/components/ui/input';
import { Textarea as ShadcnTextarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  icon?: ReactNode;
}

export const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  name,
  required = false,
  disabled = false,
  error,
  className = '',
  icon
}: InputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <Label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
        <ShadcnInput
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={`
            w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary 
            text-sm sm:text-base
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-red-500 focus:border-red-500' : ''}
            ${className}
          `}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  rows?: number;
}

export const TextareaField = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  required = false,
  disabled = false,
  error,
  className = '',
  rows = 4
}: TextareaProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <Label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      <ShadcnTextarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        rows={rows}
        className={`
          w-full bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary 
          text-sm sm:text-base resize-none
          ${error ? 'border-red-500 focus:border-red-500' : ''}
          ${className}
        `}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}; 