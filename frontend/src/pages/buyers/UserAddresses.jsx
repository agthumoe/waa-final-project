import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import useProfile from '../../hooks/useProfile';
import useUserAddresses from '../../hooks/useUserAddresses';

const UserAddresses = () => {
  const { data, isLoading } = useProfile();
  const { data: addresses, isLoading: isLoadingAddresses } = useUserAddresses(
    data?.id
  );

  if (isLoading || isLoadingAddresses) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto p-4 mt-10 flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          User Addresses
        </h1>
        <div className="flex items-center justify-end space-x-2 mb-4">
          <Link to="/buyer/addresses/create">
            <Button>Create Address</Button>
          </Link>
        </div>
        <div className="flex space-x-2">
          {addresses.map((address) => (
            <Link to={`/buyer/addresses/${address.id}`} key={address.id}>
              <div
                className={`cursor-pointer p-4 rounded-lg border border-gray-300 hover:bg-gray-100 transition-all duration-200`}
              >
                <p className="text-sm font-medium text-gray-800">
                  {address.street}
                </p>
                <p className="text-sm text-gray-600">
                  {address.city}, {address.state}
                </p>
                <p className="text-sm text-gray-600">
                  {address.zipCode}, {address.country}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserAddresses;
