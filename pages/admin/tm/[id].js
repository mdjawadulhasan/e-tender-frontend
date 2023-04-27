import MyLayout from "@/pages/admin/component/layout";
import UserLayout from "../component/userdata";
import axios from "axios";
import { useRouter } from "next/router";

export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <MyLayout title="Tenders" />
      <UserLayout data={data} />

      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/admin/TenderManager/viewprofile/" + id
  );
  const data = await response.data;

  return { props: { data } };
}
