import _ from 'lodash';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Role from '../components/Role';
import useProfile from '../hooks/useProfile';

const Profile = () => {
  const { data, isLoading, isError } = useProfile();

  if (isLoading) {
    return <div className="text-center mt-10">Loading your profile...</div>;
  }

  if (isError || !data) {
    return (
      <div className="text-center mt-10 text-red-500">
        Failed to load profile data.
      </div>
    );
  }

  const profilePic = data.profilePic; // Assume `profilePic` is part of the user's data
  const initials =
    data.name
      ?.split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase() || 'U';

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 flex-1">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center">
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-5xl">
                  {initials}
                </span>
              )}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{data.name}</h1>
              <p className="text-gray-600">{data.email}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Account Details
            </h2>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Full Name:</span>
                <span className="text-gray-800">{data.name || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Email:</span>
                <span className="text-gray-800">{data.email || 'N/A'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Roles:</span>
                <span className="text-gray-800 space-x-2">
                  {_.map(data.roles, (role) => (
                    <Role key={role} role={role} />
                  ))}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Button>Edit Profile</Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
