import Link from "next/link";
import MyLayout from "@/pages/admin/component/layout";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Megister" />
      <h1>All Megister</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.AgencyName}</li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/admin/Agency/all");
  const data = await response.data;

  return { props: { data } };
}
