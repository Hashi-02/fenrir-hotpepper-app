import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import Image from 'next/image';
export default function index({ restaurants, lat, lng, range }) {
  const NumberDisplayData = restaurants.results.results_returned;
  const NumberAllData = restaurants.results.results_available;
  const router = useRouter();
  const pageChange = (event) => {
    let selectedPage = event.selected;
    router.push({
      pathname: '/restaurants',
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
  // console.log(restaurants.results.shop.photo.mobile.s);
  return (
    <div>
      <h1>レストラン一覧</h1>
      <h3>{NumberAllData}件の検索結果</h3>

      {restaurants.results.shop.map((restaurant) => {
        return (
          <div key={restaurant.id}>
            <Link href={`/restaurants/detail/${restaurant.id}`}>
              <Image
                src={restaurant.photo.pc.l}
                alt="Picture of the author"
                width={200}
                height={200}
              />
              <br />
              {restaurant.name}
              <br />
              {restaurant.access}
              <br />
            </Link>
          </div>
        );
      })}

      {/* ページネーション作る */}
      {NumberAllData !== 0 && (
        <div>
          <ReactPaginate
            pageCount={Math.ceil(NumberAllData / NumberDisplayData)} //総ページ数。今回は一覧表示したいデータ数 / 1ページあたりの表示数としてます。
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
  const apiBaseUrl = process.env.API_URL_ROOT;
  // // const res = await fetch(`${apiBaseUrl}&lat=${lat}&lng=${lng}&range=${range}`);
  // const res = await fetch(
  //   `${apiBaseUrl}&lat=${lat}&lng=${lng}&range=${range}&start=${start}&count=${count}`
  // );

  const res = await fetch(
    `${apiBaseUrl}&lat=34.7055051&lng=135.4983028&range=${range}&start=${start}&count=${count}`
  );
  const restaurants = await res.json();
  // console.log(restaurants.results.shop);
  return { props: { restaurants, lat, lng, range } };
}
