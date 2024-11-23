import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { variantStockUpdate } from '../api/api';
import useNotificationStore from '../hooks/useNotificationStore';
import Button from './Button';

const StockUpdateModal = ({ isOpen, onClose, stock, setStock, variantId }) => {
  const { notify } = useNotificationStore();
  const queryClient = useQueryClient();

  const handleSubmit = () => {
    variantStockUpdate(variantId, { stock }).then(() => {
      notify('Stock updated successfully');
      queryClient.invalidateQueries('products');
    });
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
            Update Stock Quantity
          </DialogTitle>
          <Description className="text-gray-600">
            Please note that this will overrided the current stock quantity. Not
            add to it.
          </Description>

          <div className="flex justify-center items-center space-x-4 mt-4 mb-4">
            <input
              type="number"
              value={Number(stock)}
              onChange={(e) => setStock(Number(e.target.value))}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            />
          </div>
          <div className="flex justify-between">
            <Button onClick={onClose} type="button" color="default">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Update
            </Button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

StockUpdateModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  stock: PropTypes.number,
  setStock: PropTypes.func,
  variantId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StockUpdateModal;
