import MyLayout from "@/pages/Agency/component/layout";
import TenderLayout from "@/pages/tender-manager/tender/tenderdata";
import axios from "axios";
import { useRouter } from "next/router";

export default function AgencyProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <MyLayout title="Tenders" />
      <TenderLayout data={data} />

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
