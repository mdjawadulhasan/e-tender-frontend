import MyLayout from "@/pages/magister/component/layout";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Profile" />
      <h1>Agency Profile</h1>

      <h3>Name : {data.name}</h3>
      <h3>Email : {data.Email}</h3>
      {/* <h3>Project Completed : {data.Noprojectcomleted}</h3> */}
      {/* <h3>Agency Status :{data.Status}</h3> */}
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/megister/viewprofile/2"
  );
  const data = await response.data;
  return { props: { data } };
}
