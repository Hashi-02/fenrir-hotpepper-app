export default function restaurantDetailInfo({ restaurantDetailInfo }) {
  return (
    <div>
      <h1>
        restaurantDetailInfo(投稿){restaurantDetailInfo.results.shop[0].id}
      </h1>
      <h2>{restaurantDetailInfo.results.shop[0].name}</h2>
      <p>{restaurantDetailInfo.results.shop[0].mobile_access}</p>
      <p>{restaurantDetailInfo.results.shop[0].open}</p>
      <p>{restaurantDetailInfo.results.shop[0].photo.pc.l}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.detailInfo;
  const apiBaseUrl = process.env.API_URL_ROOT;
  const res = await fetch(`${apiBaseUrl}&id=${id}`);
  const restaurantDetailInfo = await res.json();

  if (!Object.keys(restaurantDetailInfo).length) {
    return {
      notFound: true,
    };
  }
  return { props: { restaurantDetailInfo } };
}
