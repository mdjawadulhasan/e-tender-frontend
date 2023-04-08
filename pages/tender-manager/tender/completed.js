import Link from "next/link";
import axios from "axios";
import MyLayout from "@/pages/tender-manager/component/layout";

export default function AvlTenders({ data }) {
  return (
    <>
      <MyLayout title="Completed Tenders" />
      <h1>Completed Tenders</h1>
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
  const response = await axios.get("http://localhost:3000/tenders/Completed");
  const data = await response.data;

  return { props: { data } };
}
