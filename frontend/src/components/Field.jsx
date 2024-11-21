import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useId } from 'react';

const Field = ({ label, ...props }) => {
  const id = useId();
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={id} className="block text-sm/6 font-medium text-gray-900">
        {label}
        <input
          {...field}
          {...props}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string,
};

export default Field;
