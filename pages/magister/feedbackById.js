import MyLayout from "@/pages/magister/component/layout";
import axios from "axios";

export default function FeedBAck({ data }) {
  return (
    <>
      <MyLayout title="Profile" />
      <h1>Feedback</h1>

      <h3>FeedbackText : {data.FeedbackText}</h3>
      <h3>Rating : {data.Rating}</h3>
      {/* <h3>Project Completed : {data.Noprojectcomleted}</h3> */}
      {/* <h3>Agency Status :{data.Status}</h3> */}
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/megister/Feedback/1");
  const data = await response.data;
  return { props: { data } };
}
