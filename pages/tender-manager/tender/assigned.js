import Link from "next/link";
import axios from 'axios';
import MyLayout from "@/pages/tender-manager/component/layout";
import SideLayout from "../component/sidebar";

export default function AssigendTenders({ data }) {
  return (
    <>
      <MyLayout title="Assigned Tenders" />
      <SideLayout/>
      <h1>Assigned Tenders</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={"/tender-manager/tender/" + item.id}>{item.Tendername}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/tenders/Assigned");
  const data = await response.data;

  return { props: { data } };
}
