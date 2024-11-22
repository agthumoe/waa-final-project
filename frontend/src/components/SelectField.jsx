import { useField } from 'formik';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useId } from 'react';

const SelectField = ({
  label,
  isLoading,
  options = [],
  onChange,
  ...props
}) => {
  const id = useId();
  const [field, meta] = useField(props);
  return (
    <div className="mb-4">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-800 mb-1"
      >
        {label}
      </label>
      <select
        disabled={isLoading}
        onSelect={(e) => {
          onChange && onChange(e.target.value);
        }}
        {...field}
        {...props}
        id={id}
        className="w-full px-4 py-1 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        {isLoading ? (
          <option disabled value="">
            Loading...
          </option>
        ) : (
          <>
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </>
        )}
        {_.isEmpty(options) && (
          <option disabled value="">
            No options available
          </option>
        )}
      </select>
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
};

export default SelectField;
