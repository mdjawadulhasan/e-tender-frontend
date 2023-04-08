import Link from "next/link";
import axios from "axios";
import MyLayout from "@/pages/tender-manager/component/layout";

export default function AvlTenders({ data }) {
  return (
    <>
      <MyLayout title="Available Tenders" />
      <h1>Available Tenders</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={"/tender-manager/tender/" + item.id}>
              {item.Tendername}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/tenders/available");
  const data = await response.data;

  return { props: { data } };
}
