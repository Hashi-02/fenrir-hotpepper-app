import React, { useContext } from 'react';
import { DetailInfoData } from '../pages/restaurants/[restaurant]/[detailInfo]';
import Image from 'next/image';
import styles from './styles/DetailInfo.module.scss';
import Link from 'next/link';
import DefaultButton from './DefaultButton';
const DetailInfo = () => {
  const { shop } = useContext(DetailInfoData);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          src={shop.picSrc}
          alt="Picture of the author"
          width={200}
          height={200}
          className={styles.img}
          priority={true}
        />
        <div>
          <h1>{shop.name}</h1>
          <p>{shop.genre}</p>
          <p>{shop.catch}</p>
          <p>営業時間:{shop.businessHours}</p>
          <p>お休み:{shop.close}</p>
          <p>
            現在地から徒歩{shop.duration}({shop.distance})
          </p>

          <p>平均予算:{shop.budget}</p>

          <p>{shop.address}</p>
          <p>カード:{shop.card}</p>
          <p>駐車場:{shop.parking}</p>
          <DefaultButton url={shop.hotpepperUrl} text="ホットペッパーで見る" />
          <DefaultButton url={shop.googleMapUrl} text="ここに行く(mapに移動)" />
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
