import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ children, menuItems }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="flex items-center space-x-2 bg-transparent px-4 py-2 rounded text-base text-white hover:bg-gray-700 focus:outline-none">
        {children}
        <ChevronDownIcon className="h-5 w-5" />
      </MenuButton>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded shadow-lg z-10 focus:outline-none">
          {menuItems.map((item) => (
            <MenuItem key={item.label}>
              {({ active }) =>
                item.type === 'link' ? (
                  <Link
                    to={item.to}
                    className={`block px-4 py-2 text-base rounded ${
                      active ? 'bg-gray-100' : ''
                    } text-gray-800`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={item.onClick}
                    className={`w-full text-left px-4 py-2 text-base rounded ${
                      active ? 'bg-gray-100' : ''
                    } text-gray-800`}
                  >
                    {item.label}
                  </button>
                )
              }
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
      onClick: PropTypes.func,
      type: PropTypes.oneOf(['link', 'button']).isRequired,
    })
  ).isRequired,
};

export default Dropdown;
