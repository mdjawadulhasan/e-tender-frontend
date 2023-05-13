import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";
import { useRouter } from "next/router";
import SideLayout from "../component/sidebar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../useAuth";

export default function TenderView({ data, exdata1 }) {
  console.log(exdata1);

  //   const bid = exdata1[-1];
  //   console.log(bid);

  const lastElementIndex = exdata1.length - 1;
  const bid = exdata1[lastElementIndex];
  console.log(bid.Bid);

  const user = useAuth();
  console.log(`user `, user);

  console.log(data.id);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [success, setSuccess] = useState("");

  return (
    <>
      <MyLayout title="View Tender" />
      <SideLayout />
      {success}
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">{data.Tendername}</h1>
        <p className="text-gray-700 mb-6">{data.Projectlocation}</p>
        <div className="border-b border-gray-300 pb-4 mb-4">
          <h2 className="text-lg font-bold">Bid Details</h2>
        </div>
        <ul className="mb-4">
          <li className="flex items-center py-2">
            <span className="w-1/3 font-bold text-gray-700">Agency Name</span>
            <span className="w-2/3">{user?.AgencyName}</span>
          </li>

          <li className="flex items-center py-2">
            <span className="w-1/3 font-bold text-gray-700">Agency Email</span>
            <span className="w-2/3">{user?.Email}</span>
          </li>
          <li className="flex items-center py-2">
            <span className="w-1/3 font-bold text-gray-700">Bid Amount</span>
            <span className="w-2/3">{bid.Bid}$</span>
          </li>
        </ul>
        <div className="bg-green-200 rounded-lg p-4">
          <p className="text-gray-700 font-bold">Note:</p>
          <p className="text-gray-700">
            The bid Amount displayed is the latest bid for this tender and this
            Agency.
          </p>
        </div>

        <div className="mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/Agency/tender/getalltender#")}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const response = await axios.get(
    "http://localhost:3000/tenders/viewTender/" + id
  );

  const exdata = await response.data;

  const response1 = await axios.get(
    "http://localhost:3000/Tenders/BidByTender/" + id
  );

  const exdata1 = await response1.data;

  return { props: { data: exdata, exdata1 } };
}
