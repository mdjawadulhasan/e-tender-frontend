import MyLayout from "@/pages/admin/component/layout";
import Image from "next/image";
import UserLayout from "./component/userdata";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Profile" />
      <h1>User Profile</h1>
      <UserLayout data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/Admin/viewprofile/3");
  const data = await response.data;
  return { props: { data } };
}
