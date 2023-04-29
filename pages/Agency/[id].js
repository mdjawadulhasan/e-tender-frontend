import { useRouter } from "next/router";
import axios from "axios";

function AgencyProfile({ agency }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    router.push(`/Agency/profile`)
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await axios.get(`http://localhost:3000/Agency/${id}`);
  const agency = res.data;
  return {
    props: {
      agency,
    },
  };
}

export default AgencyProfile;
