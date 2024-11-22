import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useId } from 'react';

const Field = ({ label, type = 'text', ...props }) => {
  const id = useId();
  const [field, meta] = useField(props);

  const isCheckbox = type === 'checkbox';

  return (
    <div className="mb-4">
      {label && !isCheckbox && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium text-gray-800 mb-1 ${isCheckbox ? 'inline-flex items-center' : ''}`}
        >
          {label}
        </label>
      )}
      <div className={isCheckbox ? 'inline-flex items-center' : ''}>
        <input
          {...field}
          {...props}
          id={id}
          type={type}
          checked={field.value}
          className={`${
            isCheckbox
              ? 'h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500'
              : 'w-full px-4 py-1 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
          }`}
        />
        {label && isCheckbox && (
          <label htmlFor={id} className="ml-2 text-sm text-gray-800">
            {label}
          </label>
        )}
        {isCheckbox && meta.touched && meta.error && (
          <div className="text-red-500 text-sm ml-2">{meta.error}</div>
        )}
      </div>
      {!isCheckbox && meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Field;
