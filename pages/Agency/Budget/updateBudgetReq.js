import { useState, useEffect } from "react";
import MyLayout from "@/pages/Agency/component/layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function UpdateProfile() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [data, setData] = useState(null);
  const [success, setSuccess] = useState("");

  // Get the id parameter from the URL and fetch the user data from the API endpoint
  console.log(router.query.id);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/Agency/BudgetReq/view/${router.query.id}`
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [router.query.id]);
  const onSubmit = async (data) => {
    const form = {
      Amount: data.Amount,
      Cause: data.Cause,
      Agency: router.query.id,
      Tender: 1,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/Agency/BudgetReq/update`,
        form
      );
      router.push("/Agency/Budget/getAllBudgetReq");
      reset();
    } catch (error) {
      setSuccess("Update unsuccessful ");
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MyLayout title="Profile" />

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-1">
        <br></br>
        <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
        <div>
          <label htmlFor="Amount" className="block font-medium">
            Amount
          </label>
          <input
            type="number"
            id="Amount"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("Amount", { required: true })}
            defaultValue={data.Amount}
          />
          {errors.Amount && <p className="text-red-500">Name is required</p>}
        </div>

        <div>
          <label htmlFor="Cause" className="block font-medium">
            Cause
          </label>
          <input
            type="text"
            id="Cause"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("Cause", { required: true })}
            defaultValue={data.Cause}
          />
          {errors.Cause && <p className="text-red-500">Cause is required</p>}
        </div>

        <br></br>
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </>
  );
}
