import React from 'react';
import { useContext } from 'react';
import { SearchRequestData } from '../organism/header';
import { useRouter } from 'next/router';

const SearchRequest = () => {
  const { setIsLoading, selectedValue } = useContext(SearchRequestData);
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
  return <button onClick={getCurrentPosition}>検索する</button>;
};

export default SearchRequest;
