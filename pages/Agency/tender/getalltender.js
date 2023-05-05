import Link from "next/link";
import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";

import { useAuth } from "../useAuth";
import { useEffect, useState } from "react";

export default function GetUsers({ data }) {
  const user = useAuth();
  console.log(user);

  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (user != null) {
        console.log(user.id);
        const response = await axios.get(
          "http://localhost:3000/Agency/BudgetReqByAgency/" + user.id
        );
        const UserData = await response.data;

        // Iterate through each budget request and update the latest budget request for each tender ID

        setUserData(UserData);
        // const id = [...data];
        // data.map((item) =>
        // console.log(item.tenders.map((tender) => tender.Tendername))
        // );
      } else {
        console.log("null");
      }
    }
    fetchData();
  }, [user]);
  console.log(UserData);

  const tenderid = UserData.map((item) => Number(item.Tender.id));
  console.log(tenderid);

  const tenders = data.map((item) => {
    return {
      Tendername: item.Tendername,
      Tenderlocation: item.Projectlocation,
      id: item.id,
    };
  });

  console.log(tenders);
  const ids = tenders.map((item) => item.id);
  console.log(ids);

  return (
    <>
      <MyLayout title="View Tenders" />
      <SideLayout />
      <br></br>
      <br></br>
      <br></br>
      <div className="flex-grow flex justify-center items-center mt-20 ">
        <table className="w-3/4 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 text-center text-sm font-light border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="border py-3 px-8 text-lg">Tender Name</th>
              <th className="border py-3 px-8 text-lg">Create Bid</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="border py-3 px-4 text-lg bg-orange-50">
                  {item.Tendername}
                </td>
                <td className="border py-3 px-4 text-lg">
                  {tenderid.includes(item.id) ? (
                    <Link href={`/Agency/Bid//${item.id}`}>
                      <h1 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300 ease-in-out">
                        Already Create
                      </h1>
                    </Link>
                  ) : (
                    <Link href={`/Agency/tender/${item.id}`}>
                      <h1 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 ease-in-out">
                        Create
                      </h1>
                    </Link>
                  )}
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
  return { props: { data } };
}
