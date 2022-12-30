import React from 'react';
import { PageNationData } from '../pages/restaurants/index';
import { useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';
import styles from './styles/PageNation.module.scss';

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
      marginPagesDisplayed={2} //先頭と末尾に表示するページの数。今回は2としたので1,2…今いるページの前後…後ろから2番目, 1番目 のように表示されます。
      pageRangeDisplayed={3} //上記の「今いるページの前後」の番号をいくつ表示させるかを決めます。
      onPageChange={pageChange} //ページネーションのリンクをクリックしたときのイベント(詳しくは下で解説します)
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      containerClassName={styles.pagination} // ページネーションであるulに着くクラス名
      subContainerClassName={styles.pagination}
      activeClassName={styles.active} // アクティブなページのliに着くクラス名
      previousClassName={styles.previous} // 「<」のliに着けるクラス名
      nextClassName={styles.next} // 「>」のliに着けるクラス名
      disabledClassName={styles.disabled} // 使用不可の「<,>」に着くクラス名
    />
  );
};

export default PageNation;
