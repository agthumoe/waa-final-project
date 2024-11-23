import _ from 'lodash';
import PropTypes from 'prop-types';
import useSubCategoriesByCategory from '../hooks/useSubCategoriesByCategory';
import SelectField from './SelectField';

const SubCategorySelect = ({ name, label, categoryId }) => {
  const { data, isLoading } = useSubCategoriesByCategory(categoryId, {
    page: 0,
    size: 100,
  });
  const options = _.map(data?.content, (subCategory) => ({
    value: subCategory.id,
    label: subCategory.name,
  }));

  return (
    <SelectField
      name={name}
      isLoading={isLoading}
      label={label}
      options={options}
    />
  );
};

SubCategorySelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  categoryId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SubCategorySelect;
