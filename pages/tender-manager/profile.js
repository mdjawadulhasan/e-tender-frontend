import Image from "next/image";
import MyLayout from "@/pages/tender-manager/component/layout";
import axios from "axios";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="Profile" />
      <h1>User Profile</h1>
      <ul>
        <h3>Name : {data.name}</h3>
        <h3>Email : {data.email}</h3>
        <Image
          src={
            "http:/localhost:3000/TenderManager/getimage/" + data.ImgfileName
          }
          alt="me"
          width="150"
          height="150"
        />

      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/TenderManager/viewprofile/5"
  );
  const data = await response.data;
  return { props: { data } };
}
