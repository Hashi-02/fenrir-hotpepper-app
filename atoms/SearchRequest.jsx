import React from 'react';
import { useContext } from 'react';
import { SearchRequestData } from '../organism/header';
import { useRouter } from 'next/router';
import styles from './styles/SearchRequest.module.scss';
const errorMessage = {
  1: 'ページが許可を得ていないために、位置情報の取得に失敗しました。',
  2: '1 つ以上の位置の内部ソースが内部エラーを返したために、位置情報の取得に失敗しました。',
  3: '位置情報を取得するための制限時間が情報を取得する前に終了しました。',
};

const SearchRequest = () => {
  const { isLoading, setIsLoading, selectedValue } =
    useContext(SearchRequestData);
  const router = useRouter();
  const getCurrentPosition = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
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
      },
      (err) => {
        console.log(err.code);
        alert(errorMessage[err.code]);
      }
    );
  };
  return (
    <button className={styles.button} onClick={getCurrentPosition}>
      {isLoading ? <p>検索中</p> : <p>検索する</p>}
    </button>
  );
};

export default SearchRequest;
