import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../components/Button';
import Field from '../components/Field';
import useAuth from '../hooks/useAuth';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is a required field.'),
  password: Yup.string().required('Please enter your password.'),
});

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleSubmit = async (values) => {
    await handleLogin(values);
    navigate('/');
  };

  return (
    <div className="h-full">
      <div className="container mx-auto my-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className='"mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <>
                <Form className="space-y-6">
                  <Field name="email" label="Email" placeholder="Your email" />
                  <Field
                    name="password"
                    label="Password"
                    placeholder="Your password"
                    type="password"
                  />
                  <div>
                    <Button block type="submit">
                      Login
                    </Button>
                  </div>
                </Form>
                <p className="mt-10 text-center text-sm/6 text-gray-500">
                  Not a member?
                  <Link
                    to="/register"
                    className="ml-1 font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Register now
                  </Link>
                </p>
              </>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
