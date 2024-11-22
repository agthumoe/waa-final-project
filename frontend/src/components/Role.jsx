import PropTypes from 'prop-types';

const Role = ({ role }) => {
  let badgeText = '';
  let badgeColor = '';

  // Determine the badge text and color based on the role
  switch (role) {
    case 'ROLE_ADMIN':
      badgeText = 'Admin';
      badgeColor = 'bg-blue-500';
      break;
    case 'ROLE_BUYER':
      badgeText = 'Buyer';
      badgeColor = 'bg-teal-600';
      break;
    case 'ROLE_SELLER':
      badgeText = 'Seller';
      badgeColor = 'bg-orange-600';
      break;
    default:
      badgeText = 'Unknown Role';
      badgeColor = 'bg-gray-500';
  }

  return (
    <span
      className={`px-3 py-1 text-white rounded-full text-sm font-semibold ${badgeColor}`}
    >
      {badgeText}
    </span>
  );
};

Role.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Role;
