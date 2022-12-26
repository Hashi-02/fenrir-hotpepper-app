import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
export default function index({
  restaurants,
  lat,
  lng,
  range,
  start,
  count,
  page,
}) {
  const [NumberDisplayData, setNumberDisplayData] = useState(
    restaurants.results.results_returned
  );
  const [startNumber, setStartNumber] = useState(
    page * restaurants.results.results_returned
  );
  const [currentPageNumber, setCurrentPageNumber] = useState(page);
  const router = useRouter();
  const pageChange = (event) => {
    let selectedPage = event.selected;
    setCurrentPageNumber(selectedPage + 1);
    setStartNumber((selectedPage + 1) * NumberDisplayData + 1);
    router.push({
      pathname: '/restaurants', //URL
      query: {
        lat: lat,
        lng: lng,
        range: range,
        start: selectedPage * NumberDisplayData + 1,
        count: NumberDisplayData,
        page: selectedPage + 1,
      }, //検索クエリ
    });
  };
  return (
    <div>
      <h1>レストラン一覧</h1>
      <h3>{restaurants.results.results_available}件の検索結果</h3>
      <ul>
        {restaurants.results.shop.map((restaurant) => {
          return (
            <li key={restaurant.id}>
              <Link href={`/restaurants/detail/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* ページネーション作る */}
      {restaurants.results.results_available !== 0 && (
        <div>
          <ReactPaginate
            pageCount={Math.ceil(
              restaurants.results.results_available / NumberDisplayData
            )} //総ページ数。今回は一覧表示したいデータ数 / 1ページあたりの表示数としてます。
            marginPagesDisplayed={3} //先頭と末尾に表示するページの数。今回は2としたので1,2…今いるページの前後…後ろから2番目, 1番目 のように表示されます。
            pageRangeDisplayed={5} //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
            onPageChange={pageChange} //ページネーションのリンクをクリックしたときのイベント(詳しくは下で解説します)
            previousLabel="<" //前のページ番号に戻すリンクのテキスト
            nextLabel=">" //次のページに進むボタンのテキスト
            breakLabel="..." // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
          />
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
  const count = context.query.count;
  const page = context.query.page;
  const apiBaseUrl = process.env.API_URL_ROOT;
  // // const res = await fetch(`${apiBaseUrl}&lat=${lat}&lng=${lng}&range=${range}`);
  // const res = await fetch(
  //   `${apiBaseUrl}&lat=${lat}&lng=${lng}&range=${range}&start=${start}&count=${count}`
  // );

  const res = await fetch(
    `${apiBaseUrl}&lat=34.7055051&lng=135.4983028&range=${range}&start=${start}&count=${count}`
  );
  const restaurants = await res.json();

  return { props: { restaurants, lat, lng, range, start, count, page } };
}
