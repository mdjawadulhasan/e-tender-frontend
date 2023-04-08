import MyLayout from "@/pages/tender-manager/component/layout";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <MyLayout title="Tenders" />
      <h3>Tendername: {data.Tendername}</h3>
      <h3>Projectlocation: {data.Projectlocation}</h3>
      <h3>Tenderbudget: {data.Tenderbudget}</h3>
      <h3>Tenderbudget: {data.Tenderbudget}</h3>
      <h3>ProjectStartDate: {data.ProjectStartDate}</h3>
      <h3>ProjectCmplttDate: {data.ProjectCmplttDate}</h3>
      <h3>Deadline: {data.Deadline}</h3>
      <h3>Cmpltpercentege: {data.Cmpltpercentege}</h3>
      <h3>TendermanagerId: {data.TendermanagerId}</h3>
      <h3>AgencyId: {data.AgencyId}</h3>
      <h3>Status: {data.Status}</h3>

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/tenders/viewTender/" + id
  );
  const data = await response.data;

  return { props: { data } };
}
