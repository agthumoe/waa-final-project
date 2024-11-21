import cx from 'classnames';
import PropTypes from 'prop-types';

const config = {
  primary: {
    bgColor: 'bg-indigo-600',
    hoverBgColor: 'hover:bg-indigo-500',
    focusOutline: 'focus-visible:outline-indigo-600',
  },
  danger: {
    bgColor: 'bg-red-600',
    hoverBgColor: 'hover:bg-red-500',
    focusOutline: 'focus-visible:outline-red-600',
  },
  success: {
    bgColor: 'bg-green-600',
    hoverBgColor: 'hover:bg-green-500',
    focusOutline: 'focus-visible:outline-green-600',
  },
  warning: {
    bgColor: 'bg-yellow-600',
    hoverBgColor: 'hover:bg-yellow-500',
    focusOutline: 'focus-visible:outline-yellow-600',
  },
  default: {
    bgColor: 'bg-gray-600',
    hoverBgColor: 'hover:bg-gray-500',
    focusOutline: 'focus-visible:outline-gray-600',
  },
};

const Button = ({
  children,
  color = 'primary',
  type = 'button',
  onClick,
  className,
  block = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cx(
        `rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`,
        config[color].bgColor,
        config[color].hoverBgColor,
        config[color].focusOutline,
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
};
export default Button;
