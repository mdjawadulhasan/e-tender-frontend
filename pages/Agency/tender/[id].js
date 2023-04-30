import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";
import { useRouter } from "next/router";
import SideLayout from "../component/sidebar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../useAuth";

export default function TenderView({ data }) {
  console.log(data.id);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const user = useAuth();

  console.log(user);

  const [success, setSuccess] = useState("");
  const onSubmit = async (formData) => {
    const bid = formData.bid;

    const bidData = {
      Bid: bid,
      Agency: user.id,
      Tender: data.id,
    };
   // console.log(`Agency id is ${bidData.AgencyId}`);
    //console.log(`tender id is ${bidData.TenderId}`);
    try {
      const response = await axios.post(
        "http://localhost:3000/Agency/Auction/createbid",
        bidData
      );
      setSuccess("Bid created successfully");
      reset();
    } catch (error) {
      setSuccess("Error creating bid: " + error.response.data.message);
    }
  };

  return (
    <>
      <MyLayout title="View Tender" />
      <SideLayout />
      {success}
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br>
      {/*------ show tender info-------  */}
      <div className="w-full max-w-md mx-auto bg-white rounded-md shadow-md p-8  bg-orange-300">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            {...register("name", { required: true })}
            defaultValue={data.Tendername}
          />
          {errors.name && <p className="text-red-500 mt-2">Name is required</p>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="projectLocation"
            className="block text-gray-700 font-medium mb-2"
          >
            Project Location
          </label>
          <input
            type="text"
            id="projectLocation"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            {...register("projectLocation", { required: true })}
            defaultValue={data.Projectlocation}
          />
        </div>

        {/* ---------create bid ------------ */}

        <div className="w-full max-w-md mx-auto bg-white rounded-md shadow-md p-8 bg-white-300">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="bid"
                className="block text-gray-700 font-medium mb-2"
              >
                Bid
              </label>
              <input
                type="number"
                id="bid"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                {...register("bid", { required: true })}
                placeholder="Enter bid amount"
              />
              {errors.bid && (
                <p className="text-red-500 mt-2">Bid amount is required</p>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Create Bid
              </button>
            </div>
          </form>
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

  return { props: { data: exdata } };
}
