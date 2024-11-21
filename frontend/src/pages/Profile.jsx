import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Badge from "../components/Badge";
import Button from "../components/Button";
import AuthContext from "../contexts/AuthContext";
import useAuth from "../hooks/useAuth";

const Description = ({ label, value }) => (
  <div className="py-6 grid grid-cols-3 gap-4">
    <dt className="text-sm/6 font-medium text-gray-900">{label}</dt>
    <dd className="text-sm/6 text-gray-700 col-span-2 space-x-1">{value}</dd>
  </div>
);

Description.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};

const renderRoles = (roles) =>
  roles?.map((role) => <Badge key={role}>{role}</Badge>);

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const onHandleLogout = () => {
    logout().then(() => {
      navigate("/");
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-32 p-10 rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-bold text-indigo-700 mb-7 text-center">
        User Profile
      </h2>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <Description label="ID" value={user?.id} />
          <Description label="Username" value={user?.username} />
          <Description label="Full name" value={user?.name} />
          <Description label="Roles" value={renderRoles(user?.roles)} />
        </dl>
      </div>
      <div className="mt-7 flex space-x-2 justify-end">
        <Button
          type="button"
          color="danger"
          className="w-full"
          onClick={onHandleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Profile;
