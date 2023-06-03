import React from 'react';
import { Input, LabelWrapper } from './Filter.styled';

import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <LabelWrapper>
    Search contacts by name:
    <Input type="text" value={value} onChange={onChange} />
  </LabelWrapper>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
