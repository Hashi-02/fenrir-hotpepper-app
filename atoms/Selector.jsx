import React from 'react';
import { RangeData } from '../organism/header';
import { useContext } from 'react';
import Select from 'react-select';
import styles from './styles/Selector.module.scss';

const Selector = () => {
  const { selectedValue, setSelectedValue, options } = useContext(RangeData);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      //ここでボックスの中身のスタイルをカスタマイズ
      borderBottom: '1px solid rgb(221, 221, 221)',
      color: state.isSelected ? '#eb6100' : 'gray',
      backgroundColor: 'white',
      padding: 20,
      textAlign: 'center',
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      //ここでボックス自体のスタイルをカスタマイズ
      width: 200,
      display: 'flex',
      textAlign: 'center',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 1000ms';

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div className={styles.selector}>
      <Select
        options={options}
        defaultValue={selectedValue}
        styles={customStyles}
        instanceId="selectbox"
        onChange={(value) => {
          value ? setSelectedValue(value) : null;
        }}
      />
    </div>
  );
};

export default Selector;
