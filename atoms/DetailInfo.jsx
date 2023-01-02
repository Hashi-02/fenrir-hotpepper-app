import React, { useContext } from 'react';
import { DetailInfoData } from '../pages/restaurants/[restaurant]/[detailInfo]';
import Image from 'next/image';
import style from './styles/DetailInfo.module.scss';
import Link from 'next/link';
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
          priority={true}
        />
        <div>
          <h2>{shop.name}</h2>
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
          <Link href={shop.hotpepperUrl} target="_blank">
            ホットペッパーで見る
          </Link>
          <br />
          <Link href={shop.googleMapUrl} target="_blank">
            ここに行く(mapに移動)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
