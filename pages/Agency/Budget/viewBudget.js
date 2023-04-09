import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";

export default function GetBid({ data }) {
  return (
    <>
      <MyLayout title="Bid" />
      <h1>Show Bid </h1>

      <h3>ID : {data.id}</h3>
      <h3>Amount : {data.Amount}</h3>
      <h3>Created_at : {data.Created_at}</h3>
      <h3>Updated_at : {data.Updated_at}</h3>
      <h3>Cause : {data.Cause}</h3>

      {/* <h3>Project Completed : {data.Noprojectcomleted}</h3> */}
      {/* <h3>Agency Status :{data.Status}</h3> */}
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/Agency/BudgetReq/view/1"
  );
  const data = await response.data;
  return { props: { data } };
}
