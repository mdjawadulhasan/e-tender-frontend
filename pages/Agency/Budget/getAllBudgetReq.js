import Link from "next/link";
import { useState, useEffect } from "react";
import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";
import { useAuth } from "../useAuth";
import { useRouter } from "next/router";

export default function GetUsers() {
  const [data, setData] = useState([]);
  const user = useAuth();

  const router = useRouter();
  //   const handleUpdateClick = () => {
  // router.push(`/Agency/Budget/updateBudgetReq`);
  //   };

  // const handleUpdateClick = (id) => {
  // router.push({
  // pathname: `/Agency/Budget/updateBudgetReq`,
  // query: { id: id },
  // });
  // };

  const handleUpdateClick = (id, tenderName) => {
    router.push({
      pathname: `/Agency/Budget/updateBudgetReq`,
      query: { id: id, tenderName: tenderName },
    });
  };

  const handleDeleteClick = (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      console.log("ok");
      fetch(`http://localhost:3000/Agency/BudgetReq/delete/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 500) {
            alert("Can't Delete ");
          } else {
            alert("Delete Successfull");
            window.location.reload();
          }
        })

        .catch((error) => console.log(error)); // handle the error
    } else {
      alert("Can't Delete ");
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (user != null) {
        console.log(user.id);
        const response = await axios.get(
          "http://localhost:3000/Agency/BudgetReqByAgency/" + user.id
        );
        const data = await response.data;

        const latestBudgetReqByTender = {};

        // Iterate through each budget request and update the latest budget request for each tender ID
        data.forEach((budgetReq) => {
          const tenderId = budgetReq.Tender.id;
          if (
            !(tenderId in latestBudgetReqByTender) ||
            budgetReq.id > latestBudgetReqByTender[tenderId].id
          ) {
            latestBudgetReqByTender[tenderId] = budgetReq;
          }
        });

        // Convert the object into an array of latest budget requests and set it as state
        const latestBudgetReqs = Object.values(latestBudgetReqByTender);
        setData(latestBudgetReqs);


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
      <div className="flex-grow flex justify-center items-center mt-20">
        <table className="w-3/4 sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 shadow-lg">
          <thead className="bg-gray-200">
            <tr className=" text-center">
              <th className="border py-3 px-8 text-lg text-center">
                Tender Name
              </th>
              <th className="border py-3 px-8 text-lg">Location</th>
              <th className="border py-3 px-8 text-lg">Previous Request</th>
              <th className="border py-3 px-8 text-lg">Previous Cause </th>
              <th className="border py-3 px-8 text-lg">Edit</th>
              <th className="border py-3 px-8 text-lg">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data.map((item) =>
              item.Tender ? (
                <tr key={item.id} className="bg-white">
                  <td className="border py-3 px-4 text-lg bg-orange-200">
                    {item.Tender.Tendername}
                  </td>
                  <td className="border py-3 px-4 text-lg bg-orange-200">
                    {item.Tender.Projectlocation}
                  </td>
                  <td className="border py-3 px-4 text-lg bg-orange-200">
                    {item.Amount + `💲`}
                  </td>
                  <td className="border py-3 px-4 text-lg bg-orange-200">
                    {item.Cause}
                  </td>

                  <td className="border py-3 px-4 text-lg">
                    <h1
                      className="px-4 py-2 bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-600"
                      onClick={() =>
                        handleUpdateClick(item.id, item.Tender.Tendername)
                      }
                    >
                      Edit
                    </h1>
                  </td>
                  <td className="border py-3 px-4 text-lg">
                    <h1
                      className="px-4 py-2 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600"
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      Delete
                    </h1>
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
