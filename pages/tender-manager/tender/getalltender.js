import Link from "next/link";
import MyLayout from "@/pages/tender-manager/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";

export default function GetUsers({ data }) {
  return (
    <>
      <MyLayout title="View Tenders" />
      <SideLayout />
      <br />
      <br />
      <div className="flex-grow p-1 mt-10 ml-10">
        <table class="min-w-full  text-center text-sm font-light">
          <thead>
            <tr className="bg-gray-200">
              <th className="border py-2 px-4">Tender Name</th>
              <th className="border py-2 px-4">View Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="border py-2 px-4">{item.Tendername}</td>
                <td className="border py-2 px-4">
                  <Link href={"/tender-manager/tender/" + item.id}>
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/tenders/all");
  const data = await response.data;
  console.log(data)
  return { props: { data } };
}
