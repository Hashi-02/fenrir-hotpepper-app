import Link from 'next/link';
export default function index({ restaurants }) {
  return (
    <div>
      <h1>レストラン一覧</h1>
      <ul>
        {restaurants.results.shop.map((restaurant) => {
          return (
            <li key={restaurant.id}>
              <Link href={`/restaurants/detail/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(context);
  const lat = context.query.lat;
  const lng = context.query.lng;
  const range = context.query.range;
  // console.log(lat, lng, range);
  const apiBaseUrl = process.env.API_URL_ROOT;
  const res = await fetch(`${apiBaseUrl}&lat=${lat}&lng=${lng}&range=${range}`);
  const restaurants = await res.json();
  console.log(`${apiBaseUrl}&lat=${lat}&lng=${lng}&range=${range}`);
  console.log(restaurants.results);
  return { props: { restaurants } };
}
