import React from 'react';
import PageNation from '../../atoms/PageNation';
import RestaurantList from '../../molecules/RestaurantList';
import styles from './styles/index.module.scss';

export const PageNationData = React.createContext();
export const RestaurantListData = React.createContext();

export default function index({ restaurants, lat, lng, range, start }) {
  // console.log(restaurants.results.results_returned);
  const NumberDisplayData = parseInt(15);
  const DisplayStart = parseInt(start);
  const DisplayEnd =
    parseInt(start) + parseInt(restaurants.results.results_returned - 1);
  const NumberAllData = restaurants.results.results_available;
  const PageNationDataValue = {
    NumberDisplayData,
    NumberAllData,
    lat,
    lng,
    range,
  };
  const RestaurantListDataValue = {
    restaurants,
    lat,
    lng,
  };

  return (
    <div className={styles.wrapper}>
      <h1>周辺のレストラン</h1>
      <h3>
        {DisplayStart} ~ {DisplayEnd}件を表示 / {NumberAllData}件の検索結果
      </h3>
      <div className={styles.container}>
        <div>
          <RestaurantListData.Provider value={RestaurantListDataValue}>
            <RestaurantList />
          </RestaurantListData.Provider>
        </div>

        {/* ページネーション作る */}
        {NumberAllData !== 0 && (
          <div>
            <PageNationData.Provider value={PageNationDataValue}>
              <PageNation />
            </PageNationData.Provider>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const lat = context.query.lat;
  const lng = context.query.lng;
  const range = context.query.range;
  const start = context.query.start;

  const count = 15;
  const apiBaseUrl = process.env.API_URL_ROOT;

  const res = await fetch(
    `${apiBaseUrl}&lat=${lat}&lng=${lng}&range=${range}&start=${start}&count=${count}`
  );
  const restaurants = await res.json();
  return { props: { restaurants, lat, lng, range, start } };
}
