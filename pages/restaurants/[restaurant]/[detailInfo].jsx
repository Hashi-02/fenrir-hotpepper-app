import React from 'react';
import BackButton from '../../../atoms/BackButton';
import DetailInfo from '../../../molecules/DetailInfo';
import styles from './styles/detailInfo.module.scss';
export const DetailInfoData = React.createContext();

export default function restaurantDetailInfo({
  restaurantDetailInfo,
  DirectionInfo,
}) {
  const shop = {
    name: restaurantDetailInfo.results.shop[0].name,
    address: restaurantDetailInfo.results.shop[0].address,
    businessHours: restaurantDetailInfo.results.shop[0].open,
    close: restaurantDetailInfo.results.shop[0].close,
    budget: restaurantDetailInfo.results.shop[0].budget.name,
    catch: restaurantDetailInfo.results.shop[0].catch,
    card: restaurantDetailInfo.results.shop[0].card,
    genre: restaurantDetailInfo.results.shop[0].genre.catch,
    parking: restaurantDetailInfo.results.shop[0].parking,
    picSrc: restaurantDetailInfo.results.shop[0].photo.pc.l,
    hotpepperUrl: restaurantDetailInfo.results.shop[0].urls.pc,
    googleMapUrl: `https://www.google.com/maps/dir/?api=1&destination=${restaurantDetailInfo.results.shop[0].address}&travelmode=walking`,
    duration: DirectionInfo.routes[0].legs[0].duration.text,
    distance: DirectionInfo.routes[0].legs[0].distance.text,
  };
  const DetailInfoDataValue = {
    shop,
  };

  return (
    <div className={styles.wrapper}>
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
  const lat = context.query.lat;
  const lng = context.query.lng;
  const id = context.params.detailInfo;
  const apiBaseUrl = process.env.API_URL_ROOT;
  const googleMapAPIKEY = process.env.GOOGLE_MAP_API_KEY;
  //hotpepperグルメAPIの店舗詳細
  const res = await fetch(`${apiBaseUrl}&id=${id}`);
  const restaurantDetailInfo = await res.json();

  //GoogleMapAPIのDirectionAPI
  const DirectionAPIref = await fetch(
    `https://maps.googleapis.com/maps/api/directions/json?origin=${lat},${lng}&destination=${restaurantDetailInfo.results.shop[0].address}&mode=walking&language=ja&key=${googleMapAPIKEY}`
  );
  const DirectionInfo = await DirectionAPIref.json();

  return { props: { restaurantDetailInfo, lat, lng, DirectionInfo } };
}
