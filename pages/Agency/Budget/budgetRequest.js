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
      } else {
        console.log("null");
      }
    }
    fetchData();
  }, [user]);
  console.log(data);

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
              {/* <th className="border py-3 px-8 text-lg">Bid</th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="border py-3 px-4 text-lg bg-orange-50">
                  {item.Tendername}
                </td>

                {/* <td className="border py-3 px-4 text-lg"> */}
                {/* <Link href={`/Agency/tender/${item.id}`}> */}
                {/* <h1 className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 ease-in-out"> */}
                {/* Create */}
                {/* </h1> */}
                {/* </Link> */}
                {/* </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
