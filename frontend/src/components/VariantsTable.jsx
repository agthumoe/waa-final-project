import _ from 'lodash';
import PropTypes from 'prop-types';

const VariantsTable = ({ variants = [] }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Variants</h3>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              SKU
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Size
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Color
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Material
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Model
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Year
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Stock
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Price
            </th>
            <th className="px-2 py-2 text-left text-sm font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {_.map(variants, (variant) => (
            <tr key={variant.id} className="border-b hover:bg-gray-50">
              <td className="px-2 py-2 text-sm">{variant.sku}</td>
              <td className="px-2 py-2 text-sm">{variant.size || 'N/A'}</td>
              <td className="px-2 py-2 text-sm">{variant.color || 'N/A'}</td>
              <td className="px-2 py-2 text-sm">{variant.material || 'N/A'}</td>
              <td className="px-2 py-2 text-sm">{variant.model || 'N/A'}</td>
              <td className="px-2 py-2 text-sm">{variant.year || 'N/A'}</td>
              <td className="px-2 py-2 text-sm">{variant.stock || 0}</td>
              <td className="px-2 py-2 text-sm">${variant.price || 'N/A'}</td>
              <td className="px-2 py-2 text-sm">
                <button className="p-1 text-blue-500 hover:blue-red-600 hover:bg-blue-100 rounded transition-colors duration-300">
                  Update Stock
                </button>
              </td>
            </tr>
          ))}
          {_.isEmpty(variants) && (
            <tr>
              <td
                colSpan="8"
                className="text-center py-2 text-sm text-gray-500"
              >
                No variants available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

VariantsTable.propTypes = {
  variants: PropTypes.array,
};

export default VariantsTable;
