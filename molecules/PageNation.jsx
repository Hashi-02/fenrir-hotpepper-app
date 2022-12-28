import React from 'react';
import { PageNationData } from '../pages/restaurants/index';
import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';

const PageNation = () => {
  const { NumberDisplayData, NumberAllData, lat, lng, range } =
    useContext(PageNationData);
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
  return (
    <ReactPaginate
      pageCount={Math.ceil(NumberAllData / NumberDisplayData)} //総ページ数。今回は一覧表示したいデータ数 / 1ページあたりの表示数としてます。
      marginPagesDisplayed={3} //先頭と末尾に表示するページの数。今回は2としたので1,2…今いるページの前後…後ろから2番目, 1番目 のように表示されます。
      pageRangeDisplayed={5} //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
      onPageChange={pageChange} //ページネーションのリンクをクリックしたときのイベント(詳しくは下で解説します)
      previousLabel="<" //前のページ番号に戻すリンクのテキスト
      nextLabel=">" //次のページに進むボタンのテキスト
      breakLabel="..." // ページがたくさんあるときに表示しない番号に当たる部分をどう表示するか
    />
  );
};

export default PageNation;
