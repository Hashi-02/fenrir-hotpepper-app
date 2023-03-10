import React from 'react';
import { RestaurantListData } from '../pages/restaurants/index';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/RestaurantList.module.scss';

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
                query: { lat: lat, lng: lng },
              }}
            >
              <div className={styles.container}>
                <Image
                  src={restaurant.photo.pc.l}
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className={styles.img}
                  priority={true}
                />

                <div>
                  <p className={styles.catch}>{restaurant.genre.catch}</p>
                  <h2 className={styles.name}>{restaurant.name}</h2>
                  <p className={styles.text}>
                    {restaurant.genre.name} / {restaurant.access}
                  </p>
                  {restaurant.budget.name && (
                    <p className={styles.text}>¥{restaurant.budget.name}</p>
                  )}
                  <p className={styles.text}>カード:{restaurant.card}</p>
                  <p className={styles.text}>駐車場:{restaurant.parking}</p>
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
