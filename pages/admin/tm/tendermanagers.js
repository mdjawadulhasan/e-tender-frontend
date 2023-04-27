import Link from "next/link";
import MyLayout from "@/pages/admin/component/layout";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Tender Managers" />
      <h1>Tender Managers</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={"/admin/tm/" + item.id}>{item.name}</Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/admin/TenderManagers"
  );
  const data = await response.data;

  return { props: { data } };
}
