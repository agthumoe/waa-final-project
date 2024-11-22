import _ from 'lodash';
import PropTypes from 'prop-types';
import useCategories from '../hooks/useCategories';
import SelectField from './SelectField';

const CategorySelect = ({ label, name = 'category', onChange }) => {
  const { data, isLoading } = useCategories({ page: 0, size: 100 });
  const options = _.map(data?.content, (category) => ({
    value: category.id,
    label: category.name,
  }));

  return (
    <SelectField
      onChange={onChange}
      name={name}
      isLoading={isLoading}
      label={label}
      options={options}
    />
  );
};

CategorySelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default CategorySelect;
