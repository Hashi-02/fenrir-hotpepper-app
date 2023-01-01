import React from 'react';
import BackButton from '../../../atoms/BackButton';
import DetailInfo from '../../../atoms/DetailInfo';
import style from './styles/detailInfo.module.scss';
export const DetailInfoData = React.createContext();

export default function restaurantDetailInfo({ restaurantDetailInfo }) {
  console.log(restaurantDetailInfo);
  const shop = {
    name: restaurantDetailInfo.results.shop[0].name,
    address: restaurantDetailInfo.results.shop[0].address,
    businessHours: restaurantDetailInfo.results.shop[0].open,
    picSrc: restaurantDetailInfo.results.shop[0].photo.pc.l,
    url: restaurantDetailInfo.results.shop[0].urls.pc,
  };
  const DetailInfoDataValue = {
    shop,
  };
  // console.log(restaurantDetailInfo);
  return (
    <div className={style.wrapper}>
      <div>
        <BackButton />
      </div>
      <div>
        <DetailInfoData.Provider value={DetailInfoDataValue}>
          <DetailInfo />
        </DetailInfoData.Provider>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.detailInfo;
  const apiBaseUrl = process.env.API_URL_ROOT;
  const res = await fetch(`${apiBaseUrl}&id=${id}`);
  const restaurantDetailInfo = await res.json();

  if (!Object.keys(restaurantDetailInfo).length) {
    return {
      notFound: true,
    };
  }
  return { props: { restaurantDetailInfo } };
}
