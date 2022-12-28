import React from 'react';
import PageNation from '../../atoms/PageNation';
import RestaurantList from '../../molecules/RestaurantList';

export const PageNationData = React.createContext();
export const RestaurantListData = React.createContext();

export default function index({ restaurants, lat, lng, range }) {
  const NumberDisplayData = 15;
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
  };

  return (
    <div>
      <h1>レストラン一覧</h1>
      <h3>{NumberAllData}件の検索結果</h3>
      <RestaurantListData.Provider value={RestaurantListDataValue}>
        <RestaurantList />
      </RestaurantListData.Provider>

      {/* ページネーション作る */}
      {NumberAllData !== 0 && (
        <div>
          <PageNationData.Provider value={PageNationDataValue}>
            <PageNation />
          </PageNationData.Provider>
        </div>
      )}
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
    `${apiBaseUrl}&lat=34.7055051&lng=135.4983028&range=${range}&start=${start}&count=${count}`
  );
  const restaurants = await res.json();
  return { props: { restaurants, lat, lng, range } };
}
