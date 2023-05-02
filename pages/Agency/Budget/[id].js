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

  //   console.log(user);

  const [success, setSuccess] = useState("");
  const onSubmit = async (formData) => {
    const cause = formData.cause;
    const amount = Number(formData.amount);
    console.log(typeof amount);
    console.log(typeof cause);
    const now = new Date();
    const Request = {
      Created_at: now,
      Amount: amount,
      Cause: cause,
      Agency: user.id,
      Tender: data.id,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/Agency/BudgetReq/Create",
        Request
      );
      setSuccess("Request created successfully");
      reset();
    } catch (error) {
      setSuccess("Error creating cause: " + error.response.data.message);
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
          {/* {errors.name && <p className="text-red-500 mt-2">Name is required</p>} */}
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

        <div className="mb-6">
          <label
            htmlFor="Tenderbudget"
            className="block text-gray-700 font-medium mb-2"
          >
            Budget
          </label>
          <input
            type="text"
            id="Tenderbudget"
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
            {...register("Tenderbudget", { required: true })}
            defaultValue={data.Tenderbudget}
          />
        </div>

        {/* ---------create cause ------------ */}

        <div className="w-full max-w-md mx-auto bg-white rounded-md shadow-md p-8 bg-white-300">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="amount"
                className="block text-gray-700 font-medium mb-2"
              >
                Request Amount
              </label>
              <input
                type="number"
                id="amount"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                {...register("amount", { required: true })}
                placeholder="Enter Request amount"
              />
              {errors.amount && (
                <p className="text-red-500 mt-2"> Amount is required</p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="cause"
                className="block text-gray-700 font-medium mb-2"
              >
                Cause
              </label>
              <input
                type="text"
                id="cause"
                className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                {...register("cause", { required: true })}
                placeholder="Enter Request amount"
              />
              {errors.cause && (
                <p className="text-red-500 mt-2">cause amount is required</p>
              )}
            </div>
            <div className="flex justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Submit
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
