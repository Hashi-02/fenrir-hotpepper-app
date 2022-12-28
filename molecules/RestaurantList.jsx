import React from 'react';
import { RestaurantListData } from '../pages/restaurants/index';
import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RestaurantList = () => {
  const { restaurants } = useContext(RestaurantListData);
  return (
    <div>
      {restaurants.results.shop.map((restaurant) => {
        return (
          <div key={restaurant.id}>
            <Link href={`/restaurants/detail/${restaurant.id}`}>
              <Image
                src={restaurant.photo.pc.l}
                alt="Picture of the author"
                width={200}
                height={200}
              />
              <br />
              {restaurant.name}
              <br />
              {restaurant.access}
              <br />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantList;
