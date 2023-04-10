import Link from "next/link";
import MyLayout from "@/pages/magister/component/layout";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Get Budget" />
      <h1>All Budget</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link href={"/magister/Budget/" + item.id}>{item.id}</Link>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/megister/BudgetReq/all"
  );
  const data = await response.data;

  return { props: { data } };
}
