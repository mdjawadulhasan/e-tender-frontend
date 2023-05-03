import Link from "next/link";
import { useState, useEffect } from "react";
import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";
import { useAuth } from "../useAuth";

export default function GetUsers() {
  const [data, setData] = useState([]);
  const user = useAuth();

  useEffect(() => {
    async function fetchData() {
      if (user != null) {
        console.log(user.id);
        const response = await axios.get(
          "http://localhost:3000/Agency/TendersByAgency/" + user.id
        );
        const data = await response.data;
        setData(data);
        // data.map((item) =>
        // console.log(item.tenders.map((tender) => tender.Tendername))
        // );
      } else {
        console.log("null");
      }
    }
    fetchData();
  }, [user]);
  console.log(data);
  const tenders = data.map((item) =>
    item.tenders.map((tender) => {
      return {
        Tendername: tender.Tendername,
        Tenderlocation: tender.Projectlocation,
        id: tender.id,
       
      };
    })
  );

  console.log(tenders);

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
              <th className="border py-3 px-8 text-lg">Location</th>
              <th className="border py-3 px-8 text-lg">Previous Budget</th>
              <th className="border py-3 px-8 text-lg">Budget Request</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) =>
              item.tenders.map((tender) => (
                <tr key={tender.id} className="bg-white">
                  <td className="border py-3 px-4 text-lg bg-orange-50">
                    {tender.Tendername}
                  </td>

                  <td className="border py-3 px-4 text-lg bg-orange-50">
                    {tender.Projectlocation}
                  </td>
                  <td className="border py-3 px-4 text-lg bg-orange-50">
                    {tender.Tenderbudget}
                  </td>

                  <td className="border py-3 px-4 text-lg">
                    <Link href={`/Agency/Budget/${tender.id}`}>
                      <h1 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 ease-in-out">
                        Create
                      </h1>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
