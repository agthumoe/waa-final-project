import PropTypes from 'prop-types';

const Badge = ({ children, color = 'green' }) => {
  // Define the color schemes for different badge colors
  const colorClasses = {
    green: 'bg-green-50 text-green-700 ring-green-600/20',
    red: 'bg-red-50 text-red-700 ring-red-600/20',
    blue: 'bg-blue-50 text-blue-700 ring-blue-600/20',
    yellow: 'bg-yellow-50 text-yellow-700 ring-yellow-600/20',
    purple: 'bg-purple-50 text-purple-700 ring-purple-600/20',
    gray: 'bg-gray-50 text-gray-700 ring-gray-600/20',
  };

  // Use the provided color or default to "green"
  const badgeClasses = colorClasses[color] || colorClasses.green;

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${badgeClasses}`}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['green', 'red', 'blue', 'yellow', 'purple', 'gray']),
};

export default Badge;
