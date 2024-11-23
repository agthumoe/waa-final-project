import _ from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './Button';
import Pagination from './Pagination';

const CategoriesTable = ({ categories, totalPages, mutable }) => {
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
          {_.map(categories, (category) => (
            <tr key={category.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">{category.name}</td>
              <td className="px-4 py-2 text-sm">
                {moment(category.createdAt).format('MMM DD YYYY')}
              </td>
              <td className="px-4 py-2 text-sm">{category.createdBy}</td>
              <td className="px-4 py-2 text-sm">
                {moment(category.lastModifiedAt).format('MMM DD YYYY')}
              </td>
              <td className="px-4 py-2 text-sm">{category.lastModifiedBy}</td>
              {mutable && (
                <td className="px-4 py-2 text-sm">
                  <Link to={`${category.id}`}>
                    <Button>Update</Button>
                  </Link>
                </td>
              )}
            </tr>
          ))}
          {_.isEmpty(categories) ? (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-2 text-sm text-center text-gray-500"
              >
                No categories found.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <Pagination totalPages={totalPages || 0} />
    </>
  );
};

CategoriesTable.propTypes = {
  categories: PropTypes.array,
  totalPages: PropTypes.number,
  mutable: PropTypes.bool,
};
export default CategoriesTable;
