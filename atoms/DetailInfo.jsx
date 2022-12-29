import React, { useContext } from 'react';
import { DetailInfoData } from '../pages/restaurants/[restaurant]/[detailInfo]';
import Image from 'next/image';
import style from './styles/DetailInfo.module.scss';
const DetailInfo = () => {
  const { shop } = useContext(DetailInfoData);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Image
          src={shop.picSrc}
          alt="Picture of the author"
          width={200}
          height={200}
          className={style.img}
        />
        <div>
          <h2>{shop.name}</h2>
          <p>{shop.address}</p>
          <p>{shop.businessHours}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
