import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { updateOrder } from '../api/api';
import useNotificationStore from '../hooks/useNotificationStore';
import Button from './Button';

const StatusUpdateModal = ({ isOpen, closeModal, orderId, currentStatus }) => {
  const [status, setStatus] = useState(currentStatus);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const queryClient = useQueryClient();

  const { notify } = useNotificationStore();

  const handleSubmit = () => {
    closeModal();
    updateOrder(orderId, { status })
      .then(() => {
        notify('Order status updated successfully');
        queryClient.invalidateQueries('orders', orderId);
      })
      .catch((e) => {
        notify(e?.response?.data?.message || 'Failed to update order status');
      });
  };

  return (
    <Dialog
      transition
      open={isOpen}
      onClose={closeModal}
      className="fixed z-50"
    >
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40" />
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <DialogPanel
          className="max-w-lg w-full space-y-4 border bg-white p-8 rounded-lg"
          style={{
            transform: isOpen ? 'scale(1)' : 'scale(0.9)',
            opacity: isOpen ? 1 : 0,
          }}
        >
          <DialogTitle className="font-bold">Update Status</DialogTitle>
          <Description>Please provide a new status update.</Description>
          <div className="flex flex-col space-y-8">
            <div className="mt-4">
              <select
                value={status}
                onChange={handleStatusChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Status</option>
                <option value="PENDING">Pending</option>
                <option value="ON_THE_WAY">On The Way</option>
                <option value="SHIPPED">Shipped</option>
                <option value="DELIVERED">Delivered</option>
                <option value="CANCELLED">Cancelled</option>
              </select>
            </div>
            <div className="flex gap-4 justify-end mt-4">
              <Button color="danger" onClick={closeModal}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>Update</Button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

StatusUpdateModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  orderId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currentStatus: PropTypes.string,
};

export default StatusUpdateModal;
