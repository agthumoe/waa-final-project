import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import BrandSelect from './BrandSelect';
import Button from './Button';
import CategorySelect from './CategorySelect';
import Field from './Field';
import SubCategorySelect from './SubCategorySelect';
import TextAreaField from './TextAreaField';

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter the product name.'),
  basePrice: Yup.number()
    .required('Please enter the base price.')
    .moreThan(0, 'Base price must be greater than 0.'),
  enabled: Yup.boolean().required('Please select the enabled status.'),
  subCategoryId: Yup.string().required('Please select the subcategory.'),
  brandId: Yup.string().required('Please select the brand.'),
});

const ProductForm = ({ initialValues, handleSubmit, enableReinitialize }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize={enableReinitialize}
    >
      {({ values }) => (
        <Form className="space-y-6">
          <Field name="name" label="Name" />
          <TextAreaField name="description" label="Description" />
          <Field name="basePrice" type="number" label="Base Price" />
          <Field name="enabled" type="checkbox" label="Enabled" />
          <CategorySelect name="categoryId" />
          <SubCategorySelect
            name="subCategoryId"
            categoryId={values?.categoryId}
          />
          <BrandSelect name="brandId" />
          <Button block type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

ProductForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  enableReinitialize: PropTypes.bool,
};

export default ProductForm;
