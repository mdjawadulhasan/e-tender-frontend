import MyLayout from "@/pages/tender-manager/component/layout";
import SideLayout from "@/pages/tender-manager/component/sidebar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UserProfile({ data }) {
  const router = useRouter();

  const tenderName = data[0]?.Tendername;

  const handleApprove = async (tenderId, agencyId, bid) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/Tenders/Approvebid/${tenderId}/${agencyId}/${bid}`
      );
      console.log(response.data);
      alert("Bid Approved Successfully");
      router.push("/tender-manager/tender/auction");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <MyLayout title="View Auction" />
      <SideLayout />
      <h1 className="text-center bg-gray-200 py-2 mt-20">
        Tender Name : {tenderName}
      </h1>

      <table className="table-fixed border mx-auto mt-10 w-3/4 mr-10">
        <thead>
          <tr>
            <th className="bg-gray-300 w-1/5 px-4 py-2">Agency Name</th>
            <th className="bg-gray-300 w-1/5 px-4 py-2">Agency Status</th>
            <th className="bg-gray-300 w-1/5 px-4 py-2">Agency Ratings</th>
            <th className="bg-gray-300 w-1/5 px-4 py-2">Bid</th>
            <th className="bg-gray-300 w-1/5 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>
            item.TenderAucton.map((auction) => (
              <tr key={auction.id}>
                {auction.Agency ? (
                  <>
                    <td className="border px-4 py-2">
                      {auction.Agency.AgencyName}
                    </td>
                    <td className="border px-4 py-2">
                      {auction.Agency.Status === 1 ? "Active" : "Inactive"}
                    </td>
                    <td className="border px-4 py-2">
                      {auction.Agency.Ratings}
                    </td>
                    <td className="border px-4 py-2">{auction.Bid}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() =>
                          handleApprove(item.id, auction.Agency.id, auction.Bid)
                        }
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
                      >
                        Approve
                      </button>

                    </td>
                  </>
                ) : (
                  <></>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(
    "http://localhost:3000/TenderManager/AuctionBids/" + id
  );
  const data = await response.data;

  return { props: { data } };
}
