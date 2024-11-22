import PropTypes from 'prop-types';

const AddressSelect = ({
  addresses = [],
  selectedAddress,
  setSelectedAddress,
}) => {
  const handleAddressSelect = (address) => {
    setSelectedAddress(address.id);
  };

  return (
    <div className="flex space-x-2">
      {addresses.map((address) => (
        <div
          key={address.id}
          onClick={() => handleAddressSelect(address)}
          className={`cursor-pointer p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all duration-200 
            ${selectedAddress === address.id ? 'bg-blue-100 border-blue-500' : ''}`}
        >
          <p className="text-sm font-medium text-gray-800">{address.street}</p>
          <p className="text-sm text-gray-600">
            {address.city}, {address.state}
          </p>
          <p className="text-sm text-gray-600">
            {address.zipCode}, {address.country}
          </p>
        </div>
      ))}
    </div>
  );
};

AddressSelect.propTypes = {
  addresses: PropTypes.array.isRequired,
  selectedAddress: PropTypes.number,
  setSelectedAddress: PropTypes.func,
};

export default AddressSelect;
