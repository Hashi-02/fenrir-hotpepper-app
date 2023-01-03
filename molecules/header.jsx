import React, { useState, useEffect, useRef } from 'react';
import Selector from '../atoms/Selector';
import SearchRequest from '../atoms/SearchRequest';
import styles from './styles/header.module.scss';
import Link from 'next/link';

const options = [
  { value: 1, label: '300m' },
  { value: 2, label: '500m' },
  { value: 3, label: '1000m' },
  { value: 4, label: '2000m' },
  { value: 5, label: '3000m' },
];
export const RangeData = React.createContext();
export const SearchRequestData = React.createContext();

export default function Header() {
  const [selectedValue, setSelectedValue] = useState(options[2]);
  const RangeDataValue = {
    selectedValue,
    setSelectedValue,
    options,
  };

  const [isLoading, setIsLoading] = useState(false);
  const SearchRequestDataValue = {
    selectedValue,
    isLoading,
    setIsLoading,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div>
          <Link href={'/'}>
            <h3>GPSグルメサーチ</h3>
          </Link>
        </div>
        <div className={styles.serchers}>
          <RangeData.Provider value={RangeDataValue}>
            <Selector />
          </RangeData.Provider>
          <div>
            <SearchRequestData.Provider value={SearchRequestDataValue}>
              <SearchRequest />
            </SearchRequestData.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}
