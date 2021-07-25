/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Field, ErrorMessage } from 'formik';

export default function ImageInput({ name, value, error, handleChange, placeholder, handleBlur }) {
  return (
    <>
      <div
        className={`w-36 h-36 mx-auto relative bg-blue-600 rounded-full !cursor-pointer shadow-xl text-center border-2 ${
          error ? 'border-red-600' : 'border-blue-600'
        }`}
      >
        <img
          className={`mx-auto inline-block rounded-full ${
            value ? '!m-0 h-full w-full' : '!mb-0 !mt-4 h-3/4 w-3/4'
          }`}
          src={value ? URL.createObjectURL(value) : '/assets/images/upload.svg'}
          alt={placeholder}
        />
        <Field
          type="file"
          className="absolute left-0 top-0 h-full w-full rounded-full opacity-0 !cursor-pointer"
          name={name}
          value={undefined}
          onChange={handleChange}
          onBlur={handleBlur}
          accept="image/jpeg,image/png"
          capture
        />
      </div>
      <div className="mt-3 text-accent font-normal text-sm">
        <ErrorMessage name={name} />
      </div>
    </>
  );
}
