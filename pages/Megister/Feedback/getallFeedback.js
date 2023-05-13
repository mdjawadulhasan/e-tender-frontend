import Link from "next/link";
import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";
import { useHistory } from "react-router-dom";

import { useAuth } from "../useAuth";
import { useEffect, useState } from "react";

export default function GetUsers({ data }) {
  const user = useAuth();
  // console.log(user);
  console.log(data);

  const [TenderData, setTenderData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (user != null) {
        console.log(user.id);
        const tenderIds = [1, 2, 5]; // Or any other array of IDs that you want to use
        const urls = tenderIds.map(
          (id) => `http://localhost:3000/Tenders/viewTender/${id}`
        );
        const response = await axios.all(urls.map((url) => axios.get(url)));
        const TenderData = response.map((res) => res.data);
        // Iterate through each budget request and update the latest budget request for each tender ID
        setTenderData(TenderData);
      } else {
        console.log("null");
      }
    }
    fetchData();
  }, [user]);

  // console.log(TenderData.Tendername);
  //
  var tender;
  const tenderdata = TenderData.map((item) => {
    return {
      tender: item.Tendername,
    };
  });
  console.log(tenderdata);

  // const mergedData = TenderData.map((item) => {
  // const feedbackItem = data.find((f) => f.TenderId === item.id);
  // return { ...item, ...feedbackItem };
  // });
  // console.log(mergedData);

  const handleDeleteClick = (id) => {
    console.log(id);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      console.log("ok");
      fetch(`http://localhost:3000/megister/Feedback/delete/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.statusCode === 500) {
            alert("Can't Delete ");
          } else {
            alert("Delete Successfull");

            setTenderData(TenderData.filter((item) => item.id !== id));
            window.location.reload();
          }
        })
        .catch((error) => console.log(error)); // handle the error
    } else {
      alert("Can't Delete ");
    }
  };

 
 
 
 
 
 

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
              {/* <th className="border py-3 px-8 text-lg">Tender Name</th> */}
              <th className="border py-3 px-8 text-lg">Feedback text</th>
              <th className="border py-3 px-8 text-lg">Rating</th>
              <th className="border py-3 px-8 text-lg">Edit</th>
              <th className="border py-3 px-8 text-lg">Delite</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="border py-3 px-4 text-lg bg-orange-50">
                  {item.FeedbackText}
                </td>

                <td className="border py-3 px-4 text-lg bg-orange-50">
                  {item.Rating}
                </td>

                <td className="border py-3 px-4 text-lg">
                  <h1
                    className="px-4 py-2 bg-green-500 text-white rounded-full cursor-pointer hover:bg-green-600"
                    onClick={() => handleUpdateClick(item.id)}
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
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get(
    "http://localhost:3000/megister/Feedback/all"
  );
  const data = await response.data;
  return { props: { data } };
}
