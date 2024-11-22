import { Transition } from '@headlessui/react';
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const Notification = ({ id, title, message, type, remove }) => {
  const typeStyles = {
    info: {
      icon: <InformationCircleIcon className="w-6 h-6 text-blue-500" />,
      border: 'border-blue-500',
      background: 'bg-white',
    },
    success: {
      icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
      border: 'border-green-500',
      background: 'bg-white',
    },
    error: {
      icon: <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />,
      border: 'border-red-500',
      background: 'bg-white',
    },
    warning: {
      icon: <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500" />,
      border: 'border-yellow-500',
      background: 'bg-white',
    },
  };

  const { icon, border, background } = typeStyles[type] || typeStyles.info;

  return (
    <Transition
      appear
      show
      enter="transition-transform duration-300 ease-out"
      enterFrom="translate-y-4 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="transition-transform duration-300 ease-in"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-4 opacity-0"
    >
      <div
        className={`flex items-start p-4 mb-3 rounded-lg shadow-lg ${background} ${border}`}
        role="alert"
      >
        <div className="flex-shrink-0">{icon}</div>
        <div className="ml-4">
          {title && (
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          )}
          <p className="text-sm text-gray-700">{message}</p>
        </div>
        <button
          className="ml-auto text-gray-400 hover:text-gray-600"
          onClick={() => remove(id)}
          aria-label="Close Notification"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>
      </div>
    </Transition>
  );
};

Notification.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']).isRequired,
  remove: PropTypes.func.isRequired,
};

export default Notification;
