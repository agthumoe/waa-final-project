import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { updateAddress } from '../../api/api';
import Button from '../../components/Button';
import Field from '../../components/Field';
import Loading from '../../components/Loading';
import useNotificationStore from '../../hooks/useNotificationStore';
import useOneAddress from '../../hooks/useOneAddress';

const AddressUpdate = () => {
  const { id } = useParams();

  const { data, isLoading } = useOneAddress(id);
  const queryClient = useQueryClient();
  const { notify } = useNotificationStore();
  const navigate = useNavigate();
  const initialValues = data?.id
    ? data
    : {
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      };

  const mutation = useMutation({
    mutationFn: (values) => updateAddress(id, values),
    onSuccess: () => {
      queryClient.invalidateQueries('oneAddress');
      notify('Address updated successfully');
      navigate('/buyer/addresses');
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4 mt-10 flex-1">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        User Addresses Update
      </h1>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
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
              <Button type="submit">Update</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddressUpdate;
