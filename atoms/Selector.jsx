import React from 'react';
import { RangeData } from '../organism/header';
import { useContext } from 'react';
import Select from 'react-select';

const Selector = () => {
  const { selectedValue, setSelectedValue, options } = useContext(RangeData);
  return (
    <Select
      options={options}
      defaultValue={selectedValue}
      onChange={(value) => {
        value ? setSelectedValue(value) : null;
      }}
    />
  );
};

export default Selector;
