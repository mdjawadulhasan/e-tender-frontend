import Link from "next/link";
import MyLayout from "@/pages/tender-manager/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";
export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Get Tenders" />
      <SideLayout/>
      <h1>All Tenders</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={"/tender-manager/tender/" + item.id}>
              {item.Tendername}
            </Link>{" "}
            ||
            <Link href={"/tender-manager/tender/auction/bids/" + item.id}>
              View auction Bids
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/tenders/all");
  const data = await response.data;

  return { props: { data } };
}
