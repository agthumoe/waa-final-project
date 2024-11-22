import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useId } from 'react';

const TextAreaField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const id = useId();
  return (
    <div className="mb-5">
      {label && (
        <label htmlFor={id} className="block mb-2 font-medium text-gray-900">
          {label}
        </label>
      )}
      <textarea
        {...field}
        {...props}
        rows={4}
        id={id}
        className="bg-gray-50 border border-indigo-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

TextAreaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default TextAreaField;
