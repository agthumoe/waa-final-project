import useHealth from '../hooks/useHealth';
import Loading from './Loading';

const HealthStatus = () => {
  const { data, isLoading } = useHealth();

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs">
      <h3 className="text-xl font-semibold mb-4">Health Status</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`text-lg font-bold ${data.status === 'UP' ? 'text-green-500' : 'text-red-500'}`}
        >
          {data.status === 'UP'
            ? 'Application is Healthy'
            : 'Application is Down'}
        </div>
      )}
    </div>
  );
};

export default HealthStatus;
