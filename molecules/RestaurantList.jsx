import React from 'react';
import { RestaurantListData } from '../pages/restaurants/index';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './styles/RestaurantList.module.scss';

const RestaurantList = () => {
  const { restaurants, lat, lng } = useContext(RestaurantListData);
  return (
    <div>
      {restaurants.results.shop.map((restaurant) => {
        return (
          <div key={restaurant.id}>
            <Link
              href={{
                pathname: `/restaurants/detail/${restaurant.id}`,
                query: { id: restaurant.id, lat: lat, lng: lng },
              }}
            >
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
                  <h2 className={style.name}>{restaurant.name}</h2>
                  <p className={style.access}>
                    {restaurant.genre.name} : {restaurant.genre.catch}
                  </p>
                  <p className={style.access}>{restaurant.access}</p>
                  {restaurant.budget.name && (
                    <p className={style.access}>
                      価格帯:{restaurant.budget.name}
                    </p>
                  )}

                  <p className={style.access}>カード:{restaurant.card}</p>
                  <p className={style.access}>駐車場:{restaurant.parking}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantList;
