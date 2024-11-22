import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useId } from 'react';

const Field = ({ label, ...props }) => {
  const id = useId();
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-800 mb-1"
        >
          {label}
        </label>
      )}
      <input
        {...field}
        {...props}
        id={id}
        className="w-full px-4 py-1 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
};

export default Field;
