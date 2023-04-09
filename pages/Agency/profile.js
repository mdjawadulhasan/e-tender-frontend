import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Profile" />
      <h1>Agency Profile</h1>

      <h3>Name : {data.AgencyName}</h3>
      <h3>Ratings : {data.Ratings}</h3>
      <h3>Project Completed : {data.Noprojectcomleted}</h3>
      <h3>Agency Status :{data.Status}</h3>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/Agency/viewprofile/2"
  );
  const data = await response.data;
  return { props: { data } };
}
