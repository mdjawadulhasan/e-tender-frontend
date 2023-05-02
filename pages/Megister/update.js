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
  console.log(user);

  const [success, setSuccess] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
    const form = {
      name: data.name,
      Email: data.Email,
      password: user.password,
      ImgfileName: user.ImgfileName,
      id: user.id,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/megister/update`,
        form
      );
      router.push("/Megister/profile");
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
      {/* <MyLayout title="Profile" /> */}

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-1">
        <br></br>
        <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-400 p-2 rounded-md"
            {...register("name", { required: true })}
            defaultValue={user.name}
          />
          {errors.name && <p className="text-red-500">Name is required</p>}
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
