import React, { useContext } from 'react';
import { DetailInfoData } from '../pages/restaurants/[restaurant]/[detailInfo]';
import Image from 'next/image';
const DetailInfo = () => {
  const { shop } = useContext(DetailInfoData);
  return (
    <div>
      <h1>restaurantDetailInfo</h1>
      <h2>{shop.name}</h2>
      <p>{shop.address}</p>
      <p>{shop.businessHours}</p>
      <Image
        src={shop.picSrc}
        alt="Picture of the author"
        width={200}
        height={200}
      />
    </div>
  );
};

export default DetailInfo;
