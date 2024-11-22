import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { createAddress } from '../api/api';
import Button from '../components/Button';
import Field from '../components/Field';
import useNotificationStore from '../hooks/useNotificationStore';
import { useNavigate } from 'react-router-dom';

const AddressCreate = () => {
  const queryClient = useQueryClient();
  const { notify } = useNotificationStore();
  const navigate = useNavigate();

  const initialValues = {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  };

  const mutation = useMutation({
    mutationFn: (values) => createAddress(values),
    onSuccess: () => {
      console.log('onSuccess');
      queryClient.invalidateQueries('oneAddress');
      navigate('/buyer/addresses');
      notify('Address created successfully');
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  return (
    <div className="container mx-auto p-4 mt-10 flex-1">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        User Addresses Update
      </h1>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className="space-y-6">
            <Field label="Street" name="street" placeholder="Street" />
            <Field label="City" name="city" placeholder="City" />
            <Field label="State" name="state" placeholder="State" />
            <Field label="Zipcode" name="zip" placeholder="Zip Code" />
            <Field label="Country" name="country" placeholder="Country" />
            <div className="flex justify-end space-x-2">
              <Button type="reset" color="danger">
                Reset
              </Button>
              <Button type="submit">Create</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddressCreate;
