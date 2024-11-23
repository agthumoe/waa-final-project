import { useMemo } from 'react';
import useMetrics from '../hooks/useMetrics';
import Loading from './Loading';

const bytesToMB = (bytes) => (bytes / (1024 * 1024)).toFixed(2);

const MetricsComponent = () => {
  const { data, isLoading } = useMetrics();

  const extractMetrics = useMemo(() => {
    if (!data) return {};

    return {
      memoryUsed:
        bytesToMB(
          data.find((metric) => metric.data.name === 'jvm.memory.used')?.data
            .measurements[0]?.value
        ) || 'N/A',
      cpuCount:
        data.find((metric) => metric.data.name === 'system.cpu.count')?.data
          .measurements[0]?.value || 'N/A',
      uptime:
        data.find((metric) => metric.data.name === 'process.uptime')?.data
          .measurements[0]?.value || 'N/A',
    };
  }, [data]);

  console.log(extractMetrics);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full max-w-xs">
      <h3 className="text-xl font-semibold mb-4">Application Metrics</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <p className="text-sm mb-2">
            <strong>Memory Usage:</strong> {extractMetrics.memoryUsed} MBs
          </p>
          <p className="text-sm mb-2">
            <strong>CPU Count:</strong> {extractMetrics.cpuCount} CPUs
          </p>
          <p className="text-sm mb-2">
            <strong>Uptime:</strong> {extractMetrics.uptime} seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default MetricsComponent;
