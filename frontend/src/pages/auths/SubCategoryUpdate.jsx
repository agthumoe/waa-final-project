import { Form, Formik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { updateSubCategory } from '../../api/api';
import Button from '../../components/Button';
import CategorySelect from '../../components/CategorySelect';
import Field from '../../components/Field';
import useNotificationStore from '../../hooks/useNotificationStore';
import useOneSubCategory from '../../hooks/useOneSubCategory';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter the name.'),
  categoryId: Yup.string().required('Please select the category.'),
});

const SubCategoryUpdate = () => {
  const { notify } = useNotificationStore();
  const { id } = useParams();
  const { data: subCategory } = useOneSubCategory(id);

  const initialValues = {
    name: subCategory?.name || '',
    categoryId: subCategory?.categoryId || '',
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    updateSubCategory(id, values).then(() => {
      notify('Sub Category updated successfully');
      navigate(-1);
    });
  };

  return (
    <div className="flex-1">
      <div className="container mx-auto my-5">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Update sub category: {id}
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
                <CategorySelect name="categoryId" label="Category" />
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

export default SubCategoryUpdate;
