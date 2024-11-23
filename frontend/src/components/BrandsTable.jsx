import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import Pagination from './Pagination';

const BrandsTable = ({ brands, totalPages, mutable }) => {
  return (
    <>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Created At
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Created By
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Updated At
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Updated By
            </th>
            {mutable && (
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {_.map(brands, (brand) => (
            <tr key={brand.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">{brand.name}</td>
              <td className="px-4 py-2 text-sm">
                {moment(brand.createdAt).format('MMM DD YYYY')}
              </td>
              <td className="px-4 py-2 text-sm">{brand.createdBy}</td>
              <td className="px-4 py-2 text-sm">
                {moment(brand.lastModifiedAt).format('MMM DD YYYY')}
              </td>
              <td className="px-4 py-2 text-sm">{brand.lastModifiedBy}</td>
              {mutable && (
                <td className="px-4 py-2 text-sm">
                  <Link to={`/admin/brands/${brand.id}`}>
                    <Button>Update</Button>
                  </Link>
                </td>
              )}
            </tr>
          ))}
          {_.isEmpty(brands) ? (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-2 text-sm text-center text-gray-500"
              >
                No brands found.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <Pagination totalPages={totalPages || 0} />
    </>
  );
};

BrandsTable.propTypes = {
  brands: PropTypes.array,
  totalPages: PropTypes.number,
  mutable: PropTypes.bool,
};
export default BrandsTable;
