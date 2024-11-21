import Error from "../components/Error";

const NotFound = () => {
  return (
    <Error
      title="404"
      subtitle="Page Not Found..."
      description="Sorry, we can't find the page."
      link={{ to: "/", label: "Back to HomePage" }}
    />
  );
};

export default NotFound;
