import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createOrder, deleteCartItem, updateCartItem } from '../api/api';
import AddressSelect from '../components/AddressSelect';
import Button from '../components/Button';
import Loading from '../components/Loading';
import useCart from '../hooks/useCart';
import useNotificationStore from '../hooks/useNotificationStore';
import useProfile from '../hooks/useProfile';
import useUserAddresses from '../hooks/useUserAddresses';

const Cart = () => {
  const { data, isLoading } = useCart();
  const { data: profile } = useProfile();

  const { data: addresses } = useUserAddresses(profile?.id);
  const navigate = useNavigate();

  const { notify } = useNotificationStore();

  const [paymentMethod, setPaymentMethod] = useState('CASH_ON_DELIVERY');
  const [address, setAddress] = useState(null);

  const queryClient = useQueryClient();

  const handleIncrement = (cartItemId, quantity) => {
    updateCartItem(cartItemId, { quantity: Number(quantity) + 1 }).then(() => {
      queryClient.invalidateQueries('cart');
    });
  };
  const handleDecrement = (cartItemId, quantity) => {
    updateCartItem(cartItemId, { quantity: Number(quantity) - 1 }).then(() => {
      queryClient.invalidateQueries('cart');
    });
  };
  const handleRemove = (cartItemId) => {
    deleteCartItem(cartItemId).then(() => {
      queryClient.invalidateQueries('cart');
    });
  };
  const handleCheckout = () => {
    const payload = {
      addressId: address,
      paymentMethod,
    };
    createOrder(payload).then(() => {
      queryClient.invalidateQueries('cart');
      notify('Order placed successfully');
      navigate('/buyer/orders');
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 border-b flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-700">My Shopping Cart</h1>
        </div>

        <div className="p-6">
          {_.isEmpty(data?.items) ? (
            <p className="text-gray-500 text-center">Your cart is empty!</p>
          ) : (
            _.map(data?.items, (item) => (
              <div
                key={item.variant?.id}
                className="flex items-center justify-between py-4"
              >
                <div className="flex items-center gap-4">
                  <div>
                    <h2 className="font-medium text-gray-800">
                      {item.variant?.productName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Selected Options: Color: Red, Size: M, Model: M,
                      Material:Cotton
                    </p>
                    <p className="text-sm text-green-500">
                      ${item.variant?.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    className="text-gray-500 border rounded w-10 h-10 hover:bg-gray-100"
                    onClick={() => handleDecrement(item.id, item.quantity)}
                  >
                    -
                  </button>
                  <span className="px-2 py-2 text-center border rounded h-10 w-20">
                    {item.quantity}
                  </span>
                  <button
                    className="text-gray-500 border rounded w-10 h-10 hover:bg-gray-100"
                    onClick={() => handleIncrement(item.id, item.quantity)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 text-red-500 hover:bg-red-500 hover:text-white bg-red-100 p-2 rounded-md"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
          <div className="flex flex-col items-end">
            <div>
              <label className="flex flex-col items-center gap-2">
                <div>Payment Method</div>
                <select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full pl-4 py-1 border rounded-lg text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="CASH_ON_DELIVERY">Cash on Delivery</option>
                  <option value="CREDIT_CARD">Credit Card</option>
                  <option value="PAYPAL">Paypal</option>
                </select>
              </label>
            </div>

            <div className="flex flex-col items-center gap-2">
              {_.isEmpty(addresses) ? (
                <div>
                  <p className="text-gray-500">No addresses found!</p>
                  <Link to="/addresses">Add Address</Link>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-medium text-gray-800">
                    Shipping Address
                  </h2>
                  <AddressSelect
                    addresses={addresses}
                    selectedAddress={address}
                    setSelectedAddress={setAddress}
                  />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="p-6 border-t">
          <div className="flex justify-end items-center my-4 space-x-4">
            <h2 className="text-lg font-medium text-gray-800">Total: </h2>
            <p className="text-lg font-medium text-gray-800">$200</p>
          </div>
          <Button
            block
            disabled={_.isEmpty(data?.items) || address === null}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
