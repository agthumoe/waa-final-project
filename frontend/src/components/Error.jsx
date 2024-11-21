import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "./Button";

const Error = ({ title, subtitle, description, link }) => {
  return (
    <section className="bg-white">
      <div className="mx-auto py-16 px-6">
        <div className="mx-auto text-center">
          <h1 className="mb-4 tracking-tight font-extrabold text-9xl text-primary-600">
            {title}
          </h1>
          <p className="mb-4 text-4xl tracking-tight font-bold text-gray-900">
            {subtitle}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500">{description}</p>
          {link && (
            <Link to={link.to}>
              <Button type="button">{link.label}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

Error.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.shape({
    to: PropTypes.string,
    label: PropTypes.string,
  }),
};

export default Error;
