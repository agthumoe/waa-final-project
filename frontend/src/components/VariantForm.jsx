import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Button from './Button';
import Field from './Field';
import TextAreaField from './TextAreaField';

const validationSchema = Yup.object({
  stock: Yup.number()
    .required('Please enter the stock.')
    .moreThan(0, 'Stock must be greater than 0.'),
  price: Yup.number()
    .required('Please enter the price.')
    .moreThan(0, 'Price must be greater than 0.'),
});

const VariantForm = ({ initialValues, handleSubmit, enableReinitialize }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize={enableReinitialize}
    >
      <Form className="space-y-6">
        <Field name="size" label="Size" />
        <Field name="color" label="Color" />
        <Field name="material" label="Material" />
        <Field name="model" label="Model" />
        <Field name="year" label="Year" type="number" />
        <Field name="stock" label="Stock" type="number" />
        <Field name="price" label="Price" type="number" />
        <TextAreaField name="description" label="Description" />
        <Button block type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

VariantForm.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
  enableReinitialize: PropTypes.bool,
};

export default VariantForm;
