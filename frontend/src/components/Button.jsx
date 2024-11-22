import cx from 'classnames';
import PropTypes from 'prop-types';

const config = {
  primary: {
    textColor: 'text-white',
    bgColor: 'bg-blue-500',
    hoverBgColor: 'hover:bg-blue-600',
    focusOutline: 'focus-visible:outline-blue-500',
  },
  danger: {
    textColor: 'text-white',
    bgColor: 'bg-red-600',
    hoverBgColor: 'hover:bg-red-500',
    focusOutline: 'focus-visible:outline-red-600',
  },
  success: {
    textColor: 'text-white',
    bgColor: 'bg-green-600',
    hoverBgColor: 'hover:bg-green-500',
    focusOutline: 'focus-visible:outline-green-600',
  },
  warning: {
    textColor: 'text-white',
    bgColor: 'bg-yellow-600',
    hoverBgColor: 'hover:bg-yellow-500',
    focusOutline: 'focus-visible:outline-yellow-600',
  },
  default: {
    textColor: 'text-gray-700',
    bgColor: 'bg-gray-300',
    hoverBgColor: 'hover:bg-gray-500',
    focusOutline: 'focus-visible:outline-gray-600',
  },
  link: {
    textColor: 'text-blue-500',
    border: 'border border-blue-500', // Ensure the border is always visible
    hoverTextColor: 'hover:text-white',
    hoverBgColor: 'hover:bg-blue-500',
    focusOutline: 'focus-visible:outline-blue-600',
  },
};

const Button = ({
  children,
  color = 'primary',
  type = 'button',
  onClick,
  className,
  block = false,
  variant = 'default',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cx(
        `inline-block px-6 py-2 text-lg font-medium rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed`,
        variant === 'link'
          ? `${config.link.textColor} ${config.link.border} ${config.link.hoverTextColor} ${config.link.hoverBgColor} ${config.link.focusOutline}`
          : `${config[color].bgColor} ${config[color].hoverBgColor} ${config[color].focusOutline} ${config[color].textColor}`,
        block && 'w-full',
        className
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'danger',
    'success',
    'warning',
    'default',
  ]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  block: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'link']),
  disabled: PropTypes.bool,
};

export default Button;
