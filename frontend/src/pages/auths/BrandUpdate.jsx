import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { updateBrand } from '../../api/api';
import Button from '../../components/Button';
import Field from '../../components/Field';
import useNotificationStore from '../../hooks/useNotificationStore';
import useOneBrand from '../../hooks/useOneBrand';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter the name.'),
});

const BrandUpdate = () => {
  const { notify } = useNotificationStore();

  const { id } = useParams();
  const { data: brand } = useOneBrand(id);

  const initialValues = {
    name: brand?.name || '',
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    updateBrand(id, values).then(() => {
      notify('Brand update successfully');
      navigate(-1);
    });
  };

  return (
    <div className="flex-1">
      <div className="container mx-auto my-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Update brand: {id}
            </h2>
          </div>
          <div className='"mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form className="space-y-6">
                <Field name="name" label="Name" />
                <Button block type="submit">
                  Submit
                </Button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandUpdate;
