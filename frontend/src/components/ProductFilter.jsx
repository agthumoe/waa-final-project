import { Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import BrandSelect from './BrandSelect';
import Button from './Button';
import CategorySelect from './CategorySelect';
import Field from './Field';
import SubCategorySelect from './SubCategorySelect';

const ProductFilter = ({ initialValues, handleSubmit }) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className="space-y-6">
          <Field name="name" placeholder="Search by name" />
          <Field name="minPrice" placeholder="Min price" type="number" />
          <Field name="maxPrice" placeholder="Max price" type="number" />
          <CategorySelect name="categoryId" />
          <SubCategorySelect
            name="subCategoryId"
            categoryId={values?.categoryId}
          />
          <BrandSelect name="brandId" />
          <Button block type="submit">
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

ProductFilter.propTypes = {
  initialValues: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default ProductFilter;
