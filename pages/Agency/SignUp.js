import { useState } from "react";
import MyLayout from "@/pages/Agency/component/layout";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";
import Head from "next/head";
import SideLayout from "./component/sidebar";

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpeg", "image/png"];
    console.log(file.type);
    if (!allowedtypes.includes(file.type)) {
      console.log(file.type);
      return false;
    }

    return true;
  };

  <br></br>;
  const [success, setSuccess] = useState("");
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("AgencyName", data.AgencyName);
    formData.append("Email", data.Email);

    formData.append("password", data.password);
    formData.append("file", data.file[0]);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/Agency/signup",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess("Signup successfull");
      reset();
    } catch (error) {
      setSuccess("Signup unsuccessfull " + error.response.data.message);
    }
  };
  <br></br>;
  return (
    <>
      {/* <SideLayout /> */}
      {/* <MyLayout /> */}
      <Head>
        <title>Sign Up</title>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </Head>

      <div className="max-w-sm mx-auto mt-20 border border-white p-1 rounded-md">
        <div className="flex justify-center items-center mt-12">
          <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-2" />
          <h2 className="text-2xl font-bold">Welcome To Agency</h2>
        </div>
        {success}
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="max-w-sm mx-auto mt-8"
        >
          <div className="mb-6">
            <label
              htmlFor="AgencyName"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="AgencyName"
              className="w-full border border-gray-400 p-2 rounded-md"
              {...register("AgencyName", { required: true })}
            />
            {errors.AgencyName && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="Email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="w-full border border-gray-400 p-2 rounded-md"
              {...register("Email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.Email.type === "required"
                  ? "Email is required"
                  : "Invalid Email address"}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-400 p-2 rounded-md"
              {...register("password", {
                required: true,
                pattern: /^\d+$/,
                minLength: 5,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.type === "required"
                  ? "Password is required"
                  : "Invalid password pattern"}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="file"
              className="block text-gray-700 font-medium mb-2"
            >
              File
            </label>
            <input
              type="file"
              id="file"
              className="w-full"
              {...register("file", { required: true, validate: validateFile })}
            />
            {errors.file && (
              <p className="text-red-500 text-sm mt-1">
                {errors.file.type === "required"
                  ? "File is required"
                  : "Invalid file"}
              </p>
            )}
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex justify-center items-center mt-8">
          <button
            type="button"
            onClick={() => router.push("/Agency/signin")}
            className="text-blue-500 hover:text-blue-700"
          >
            Already have an account? Sign in here.
          </button>
        </div>
      </div>
    </>
  );
}
