import React from 'react';
import { RestaurantListData } from '../pages/restaurants/index';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './styles/RestaurantList.module.scss';

const RestaurantList = () => {
  const { restaurants } = useContext(RestaurantListData);
  return (
    <div>
      {restaurants.results.shop.map((restaurant) => {
        return (
          <div key={restaurant.id}>
            <Link href={`/restaurants/detail/${restaurant.id}`}>
              <div className={style.container}>
                <Image
                  src={restaurant.photo.pc.l}
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className={style.img}
                  priority={true}
                />

                <div className={style.text}>
                  {/* <p className={style.name}>{restaurant.name}</p> */}
                  <h2 className={style.name}>{restaurant.name}</h2>
                  <p className={style.access}>{restaurant.access}</p>
                </div>
              </div>
            </Link>
            {/* <br /> */}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantList;
