import HealthStatus from '../../components/HealthStatus';
import MetricsComponent from '../../components/MetricsComponent';

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <HealthStatus />
        <MetricsComponent />
      </div>
    </div>
  );
};

export default AdminDashboard;
