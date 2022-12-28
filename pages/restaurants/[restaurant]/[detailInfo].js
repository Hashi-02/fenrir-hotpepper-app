import Image from 'next/image';
import { useRouter } from 'next/router';
export default function restaurantDetailInfo({ restaurantDetailInfo }) {
  const router = useRouter();
  const shop = {
    name: restaurantDetailInfo.results.shop[0].name,
    address: restaurantDetailInfo.results.shop[0].address,
    businessHours: restaurantDetailInfo.results.shop[0].open,
    picSrc: restaurantDetailInfo.results.shop[0].photo.pc.l,
  };
  // console.log(restaurantDetailInfo);
  return (
    <div>
      <div>
        <button alia-label="戻る" type="button" onClick={() => router.back()}>
          戻る
        </button>
      </div>
      <h1>restaurantDetailInfo</h1>
      <h2>{shop.name}</h2>
      <p>{shop.address}</p>
      <p>{shop.businessHours}</p>
      <Image
        src={shop.picSrc}
        alt="Picture of the author"
        width={200}
        height={200}
      />
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
