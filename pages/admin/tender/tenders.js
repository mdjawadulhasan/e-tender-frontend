import Link from "next/link";
import MyLayout from "@/pages/admin/component/layout";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Get Tenders" />
      <h1>All Tenders</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={"/admin/tender/" + item.id}>
              {item.Tendername}
            </Link>{" "}
            ||
            <Link href={""}>Modify</Link>
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
