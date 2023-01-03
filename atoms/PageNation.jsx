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
      },
    });
  };
  return (
    <ReactPaginate
      pageCount={Math.ceil(NumberAllData / NumberDisplayData)} //総ページ数
      marginPagesDisplayed={2} //先頭と末尾に表示するページの数
      pageRangeDisplayed={3} //今いるページの前後の番号表示
      onPageChange={pageChange} //ページネーションのリンクをクリックしたときのイベント
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
