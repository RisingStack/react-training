import React from 'react';

export default function CustomField({
  input,
  name,
  label,
  type,
  meta: { touched, error, warning }
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input {...input} name={name} placeholder={label} type={type} />
        {touched &&
          ((error && <span style={{ color: 'red' }}>{error}</span>) ||
            (warning && <span style={{ color: 'yellow' }}>{warning}</span>))}
      </div>
    </div>
  );
}
