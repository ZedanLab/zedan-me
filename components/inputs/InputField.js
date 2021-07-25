import React from 'react';
import { Field, ErrorMessage } from 'formik';

export default function InputField({
  name,
  value,
  error,
  placeholder,
  label = '',
  handleChange,
  handleBlur,
  as = 'input',
  type = 'text',
  classes = '',
  inputClasses = '',
  labelClasses = '',
  helperClasses = '',
}) {
  return (
    <div className={`relative my-8 ${classes}`}>
      <Field
        as={as}
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`form-control peer mx-auto block w-full ${
          as !== 'textarea' ? 'h-14' : 'min-h-[7rem]'
        } md:w-4/5 rounded-md ${error ? 'border-red-300' : 'border-gray-300'} shadow-sm ${
          error ? 'text-red-600' : 'text-gray-600'
        } ${error ? 'focus:border-red-300' : 'focus:border-blue-300'} focus:ring ${
          error ? 'focus:ring-red-200' : 'focus:ring-blue-200'
        } focus:ring-opacity-50 ${inputClasses}`}
      />
      <label
        htmlFor={name}
        className={`absolute -top-2.5 left-2.5 md:left-12 lg:left-16 px-1 ${
          error ? 'text-red-600' : 'text-gray-600'
        } text-sm font-semibold bg-white transition-all peer-placeholder-shown:opacity-0 ${
          error ? 'peer-focus:text-red-500' : 'peer-focus:text-blue-500'
        } ${labelClasses}`}
      >
        {label || placeholder}
      </label>
      <div
        className={`mt-1 md:ml-11 lg:ml-12 text-accent font-normal text-sm text-left ${helperClasses}`}
      >
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}
