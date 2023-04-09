// not done yet

import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";

export default function GetFeedback({ data }) {
  return (
    <>
      <MyLayout title="Bid" />
      <h1>Show Feedback </h1>

      <h3>ID : {data.id}</h3>
      <h3>Agency Name : {data.AgencyName}</h3>

      {/* <h3>Password : {data.Bid}</h3>  */}
      <h3>Email : {data.Email}</h3>
      <h3>Ratings : {data.Ratings}</h3>
      <h3>Noprojectcomleted : {data.Noprojectcomleted}</h3>
      <h3>Status : {data.Status}</h3>
      <h3>ImgfileName : {data.ImgfileName}</h3>
      <h3>feedBack : {data.feedBack}</h3>

      {/* <h3>Project Completed : {data.Noprojectcomleted}</h3> */}
      {/* <h3>Agency Status :{data.Status}</h3> */}
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/Agency/Feedbacks/1");
  const data = await response.data;
  return { props: { data } };
}
