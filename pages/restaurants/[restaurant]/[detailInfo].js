import React from 'react';
import BackButton from '../../../atoms/BackButton';
import DetailInfo from '../../../atoms/DetailInfo';
import style from './styles/detailInfo.module.scss';
export const DetailInfoData = React.createContext();

export default function restaurantDetailInfo({
  restaurantDetailInfo,
  DirectionInfo,
}) {
  const shop = {
    name: restaurantDetailInfo.results.shop[0].name,
    address: restaurantDetailInfo.results.shop[0].address,
    businessHours: restaurantDetailInfo.results.shop[0].open,
    picSrc: restaurantDetailInfo.results.shop[0].photo.pc.l,
    hotpepperUrl: restaurantDetailInfo.results.shop[0].urls.pc,
    googleMapUrl: `https://www.google.com/maps/dir/?api=1&destination=${restaurantDetailInfo.results.shop[0].name}&travelmode=walking`,
    duration: DirectionInfo.routes[0].legs[0].duration.text,
    distance: DirectionInfo.routes[0].legs[0].distance.text,
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

export async function getServerSideProps(context) {
  console.log(context.query);
  const lat = context.query.lat;
  const lng = context.query.lng;
  const id = context.query.id;
  const apiBaseUrl = process.env.API_URL_ROOT;
  const googleMapAPIKEY = process.env.GOOGLE_MAP_API_KEY;
  const res = await fetch(`${apiBaseUrl}&id=${id}`);
  const restaurantDetailInfo = await res.json();
  if (!Object.keys(restaurantDetailInfo).length) {
    return {
      notFound: true,
    };
  }
  const DirectionAPIref = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${lat},${lng}&destination=${restaurantDetailInfo.results.shop[0].address}&mode=walking&language=ja&key=${googleMapAPIKEY}`
  );
  const DirectionInfo = await DirectionAPIref.json();

  return { props: { restaurantDetailInfo, lat, lng, DirectionInfo } };
}
