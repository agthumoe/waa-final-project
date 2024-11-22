import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
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
    <Dialog transition open={isOpen} onClose={onClose} className="fixed z-50">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" />
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <DialogPanel
          className="max-w-lg w-full space-y-4 border bg-white p-8 rounded-lg"
          style={{
            transform: isOpen ? 'scale(1)' : 'scale(0.9)',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <DialogTitle className="text-xl font-semibold">
            Select Quantity
          </DialogTitle>
          <Description className="text-gray-600">
            How many items you would like to add?
          </Description>

          <div className="flex justify-center items-center space-x-4 mt-4 mb-4">
            <button
              onClick={handleDecrease}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              -
            </button>

            <span className="text-2xl font-semibold">{quantity}</span>

            <button
              onClick={handleIncrease}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <div className="flex justify-between">
            <Button onClick={onClose} type="button" color="default">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Add to Cart
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

QuantitySelectorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default QuantitySelectorModal;
