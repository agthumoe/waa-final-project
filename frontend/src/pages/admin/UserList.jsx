import { useQueryClient } from '@tanstack/react-query';
import _ from 'lodash';
import { approveUser } from '../../api/api';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import useAllUsers from '../../hooks/useAllUsers';
import useNotificationStore from '../../hooks/useNotificationStore';
import usePagination from '../../hooks/usePagination';

const UserList = () => {
  const { page, size } = usePagination();
  const { data, isLoading } = useAllUsers({ page, size });
  const queryClient = useQueryClient();
  const { notify } = useNotificationStore();

  const handleApprove = (id) => {
    approveUser(id).then(() => {
      queryClient.invalidateQueries('users');
      notify('User approved successfully');
    });
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Approved By
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Roles
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {_.map(data?.content, (user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 text-sm">{user.name}</td>
              <td className="px-4 py-2 text-sm">{user.email}</td>
              <td className="px-4 py-2 text-sm">{user.approvedBy}</td>
              <td className="px-4 py-2 text-sm">
                {user.roles && user.roles.join(', ')}
              </td>
              <td className="px-4 py-2 text-sm">
                <Button
                  disabled={!!user?.approvedBy}
                  onClick={() => handleApprove(user.id)}
                >
                  Approve
                </Button>
              </td>
            </tr>
          ))}
          {_.isEmpty(data?.content) ? (
            <tr>
              <td
                colSpan="5"
                className="px-4 py-2 text-sm text-center text-gray-500"
              >
                No users found.
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <Pagination totalPages={data?.page.totalPages || 0} />
    </div>
  );
};

export default UserList;
