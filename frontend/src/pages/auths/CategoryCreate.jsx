import { Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { createCategory } from '../../api/api';
import Button from '../../components/Button';
import Field from '../../components/Field';
import useNotificationStore from '../../hooks/useNotificationStore';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter the name.'),
});

const initialValues = {
  name: '',
};

const CategoryCreate = () => {
  const { notify } = useNotificationStore();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    createCategory(values).then(() => {
      notify('Category created successfully');
      navigate(-1);
    });
  };

  return (
    <div className="flex-1">
      <div className="container mx-auto my-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create a new category
            </h2>
          </div>
          <div className='"mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
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

export default CategoryCreate;