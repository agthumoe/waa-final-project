import { useMutation } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { register } from '../api/api';
import Button from '../components/Button';
import Field from '../components/Field';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SelectField from '../components/SelectField';
import useNotificationStore from '../hooks/useNotificationStore';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'ROLE_SELLER',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter your name.'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is a required field.'),
  password: Yup.string().required('Please enter your password.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password.'),
});

const Register = () => {
  const navigate = useNavigate();
  const { notify } = useNotificationStore();
  const mutation = useMutation({
    mutationFn: register,
  });

  const handleSubmit = async (values) => {
    mutation.mutate(values);
    notify('Account created successfully');
    navigate('/login');
  };

  return (
    <>
      <Navbar />
      <div className="flex-1">
        <div className="container mx-auto my-5">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full">
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Create a new account
              </h2>
            </div>
            <div className='"mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <>
                  <Form className="space-y-5">
                    <Field name="name" label="Name" placeholder="Your name" />
                    <Field
                      name="email"
                      label="Email"
                      placeholder="Your email"
                    />
                    <Field
                      name="password"
                      label="Password"
                      placeholder="Your password"
                      type="password"
                    />
                    <Field
                      name="confirmPassword"
                      label="Confirm Password"
                      placeholder="Confirm your password"
                      type="password"
                    />
                    <SelectField
                      name="role"
                      label="Register as"
                      options={[
                        { value: 'ROLE_BUYER', label: 'Buyer' },
                        { value: 'ROLE_SELLER', label: 'Seller' },
                      ]}
                    />
                    <div>
                      <Button block type="submit">
                        Register
                      </Button>
                    </div>
                  </Form>
                  <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Already a member?
                    <Link
                      to="/login"
                      className="ml-1 font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Login now
                    </Link>
                  </p>
                </>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
