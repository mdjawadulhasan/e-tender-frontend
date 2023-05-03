import { useState, useEffect } from "react";
import MyLayout from "@/pages/Agency/component/layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "./useAuth";

export default function UpdateProfile() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const user = useAuth();

  const [success, setSuccess] = useState("");
  const onSubmit = async (data) => {
    const form = {
      AgencyName: data.AgencyName,
      Email: data.Email,
      Ratings: data.Ratings,
      Status: data.Status,
      password: user.password,
      ImgfileName: user.ImgfileName,
      id: user.id,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/Agency/update`,
        form
      );
      router.push("/Agency/profile");
      reset();
    } catch (error) {
      setSuccess("Update unsuccessful " + error.response.data.message);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MyLayout title="Profile" />

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-1">
        <br></br>
        <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
        <div>
          <label htmlFor="AgencyName" className="block font-medium">
            AgencyName
          </label>
          <input
            type="text"
            id="AgencyName"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("AgencyName", { required: true })}
            defaultValue={user.AgencyName}
          />
          {errors.AgencyName && (
            <p className="text-red-500">Name is required</p>
          )}
        </div>

        <div>
          <label htmlFor="Status" className="block font-medium">
            Status
          </label>
          <input
            type="text"
            id="Status"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("Status", { required: true })}
            defaultValue={user.Status}
          />
          {errors.Status && <p className="text-red-500">Status is required</p>}
        </div>

        <div>
          <label htmlFor="Ratings" className="block font-medium">
            Status
          </label>
          <input
            type="text"
            id="Ratings"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("Ratings", { required: true })}
            defaultValue={user.Ratings}
          />
          {errors.Ratings && (
            <p className="text-red-500">Ratings is required</p>
          )}
        </div>

        <div>
          <label htmlFor="Email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="Email"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("Email", { required: true, pattern: /\S+@\S+\.\S+/ })}
            defaultValue={user.Email}
          />
          {errors.Email && (
            <p className="text-red-500">
              {errors.Email.type === "required"
                ? "Email is required"
                : "Invalid email address"}
            </p>
          )}
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
