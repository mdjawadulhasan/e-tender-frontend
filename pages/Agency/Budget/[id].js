import MyLayout from "@/pages/Agency/component/layout";
// import BudgetLayout from "@/pages/Agency/Budget/budgetData";
import axios from "axios";
import { useRouter } from "next/router";

export default function AgencyProfile({ data }) {
  const router = useRouter();
  return (
    <>
      <MyLayout title="Budgets" />
      <BudgetLayout data={data} />

      <button
        class="btn btn-success"
        type="button"
        onClick={() => router.back()}
      >
        Click here to go back
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/Agency/BudgetReq/view/" + id
  );
  const data = await response.data;

  return { props: { data } };
}
