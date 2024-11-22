import _ from 'lodash';
import PropTypes from 'prop-types';
import useBrands from '../hooks/useBrands';
import SelectField from './SelectField';

const BrandSelect = ({ label, name = 'brand', onChange }) => {
  const { data, isLoading } = useBrands({ page: 0, size: 100 });
  const options = _.map(data?.content, (brand) => ({
    value: brand.id,
    label: brand.name,
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

BrandSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default BrandSelect;
