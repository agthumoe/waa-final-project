import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import OrderDetails from '../../components/OrderDetails';
import OrderItems from '../../components/OrderItems';
import StatusUpdateModal from '../../components/StatusUpdateModal';
import useOneOrder from '../../hooks/useOneOrder';

const SellerOrderDetails = () => {
  const { id } = useParams();
  const { order, items, isLoading } = useOneOrder(id);

  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  const [isOpen, setIsOpen] = useState(false);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="container mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
          </div>
          <div className="p-6 space-y-4" ref={contentRef}>
            <OrderDetails order={order} />
            <OrderItems items={items} />
            <div className="flex justify-end gap-4 mt-4 print-none">
              <Button color="primary" onClick={reactToPrintFn}>
                Print Order
              </Button>
              <Button color="danger" onClick={() => setIsOpen(true)}>
                Update Status
              </Button>
            </div>
          </div>
        </div>
      </div>
      <StatusUpdateModal
        currentStatus={order.status}
        orderId={id}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </>
  );
};

export default SellerOrderDetails;
