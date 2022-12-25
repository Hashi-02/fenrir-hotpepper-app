import Link from 'next/link';
export default function index({ restaurants }) {
  return (
    <div>
      <h1>レストラン一覧</h1>
      <ul>
        {restaurants.results.shop.map((restaurant) => {
          return (
            <li key={restaurant.id}>
              <Link href={`/restaurants/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const apiBaseUrl = process.env.API_URL_ROOT;
  const res = await fetch(
    `${apiBaseUrl}&lat=34.7466029&lng=135.4960054&range=3`
  );

  const restaurants = await res.json();
  console.log(restaurants.results.shop);
  return { props: { restaurants } };
}
