import React from 'react';
import { useContext } from 'react';
import { SearchRequestData } from '../organism/header';
import { useRouter } from 'next/router';
import styles from './styles/SearchRequest.module.scss';

const SearchRequest = () => {
  const { isLoading, setIsLoading, selectedValue } =
    useContext(SearchRequestData);
  const router = useRouter();
  const getCurrentPosition = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      setIsLoading(false);
      router.push({
        pathname: '/restaurants', //URL
        query: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          range: selectedValue.value,
          start: 1,
          count: 15,
          page: 1,
        }, //検索クエリ
      });
    });
  };
  return (
    <button className={styles.button} onClick={getCurrentPosition}>
      {isLoading ? <p>検索中</p> : <p>検索する</p>}
    </button>
  );
};

export default SearchRequest;
