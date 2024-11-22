import { Dialog, DialogTitle } from '@headlessui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from './Button';

const QuantitySelectorModal = ({ isOpen, onClose, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleSubmit = () => {
    onSubmit(quantity);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
      <DialogTitle className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Select Quantity
          </h3>
          <div className="flex items-center justify-between mb-4">
            <Button
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={handleDecrease}
            >
              -
            </Button>
            <span className="text-2xl font-bold">{quantity}</span>
            <Button
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={handleIncrease}
            >
              +
            </Button>
          </div>
          <div className="flex justify-between">
            <Button
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </DialogTitle>
    </Dialog>
  );
};

QuantitySelectorModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default QuantitySelectorModal;
