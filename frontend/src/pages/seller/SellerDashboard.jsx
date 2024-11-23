import OrderCountBySeller from '../../components/OrderCountBySeller';

const SellerDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Seller Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <OrderCountBySeller />
      </div>
    </div>
  );
};

export default SellerDashboard;
