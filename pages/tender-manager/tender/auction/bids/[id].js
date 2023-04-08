import MyLayout from "@/pages/tender-manager/component/layout";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <MyLayout title="Get Tenders" />
      <h1>Auctions</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.Tendername}
            <ul>
              {item.TenderAucton.map((auction) => (
                <li key={auction.id}>Bid: {auction.Bid} | </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/TenderManager/AuctionBids/" + id
  );
  const data = await response.data;

  return { props: { data } };
}
