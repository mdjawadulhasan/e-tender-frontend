import { useState, useEffect } from "react";
import MyLayout from "@/pages/Agency/component/layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../useAuth";

export default function UpdateProfile() {
  // const user = useAuth();
  // console.log(user);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue, // Added setValue to set form field values
  } = useForm();

  const [data, setData] = useState(null);
  const [success, setSuccess] = useState("");

  // Get the id parameter from the URL and fetch the user data from the API endpoint
  console.log(router.query.id);
  // const tenderName = router.query.tenderName;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:3000/megister/Feedback/${router.query.id}`
        );
        const data = response.data;
        setData(data);
        // Set form field values on data fetch
        setValue("FeedbackText", data.FeedbackText);
        setValue("Rating", data.Rating);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [router.query.id]);

  const onSubmit = async (data) => {
    const form = {
      FeedbackText: data.FeedbackText,
      Rating: Number(data.Rating),
    };
    console.log(data);

    console.log("submitting form with data:", form);
    try {
      const response = await axios.put(
        `http://localhost:3000/megister/Feedback/update/${router.query.id}`,
        form
      );
      router.push("/Megister/Feedback/getallFeedback");
      // reset();
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
      {/* <h1 className="text-2xl font-bold mb-4 text-center">Update Profile</h1> */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-sm mx-auto mt-20 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Update Profile</h1>
        {/* <h2 className="text-lg font-bold mb-4 ">{tenderName}</h2> */}

        <div className="mb-4">
          <label htmlFor="FeedbackText" className="block font-medium mb-2">
            FeedbackText
          </label>
          <input
            type="number"
            id="FeedbackText"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("FeedbackText", { required: true })}
            defaultValue={data.FeedbackText}
          />
          {errors.FeedbackText && (
            <p className="text-red-500">FeedbackText is required</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="Rating" className="block font-medium mb-2">
            Rating
          </label>
          <input
            type="text"
            id="Rating"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("Rating", { required: true })}
            defaultValue={data.Rating}
          />
          {errors.Rating && <p className="text-red-500">Rating is required</p>}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}
