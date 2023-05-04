import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

export default function SignIn() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/Agency/signin", {
        Email,
        password,
      });
      var b = response.data;
      console.log(b);
      if (b) {
        sessionStorage.setItem("Email", response.data);
        console.log(response.data);
        router.push("/Agency/profile");
      } else {
        setError("Invalid login Credentials ");
      }
    } catch (error) {
      setError("Invalid login Credentials", error);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </Head>
      <div className="bg-gradient-to-r bg-white-600 h-screen flex justify-center items-center">
        <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
          <div className="flex justify-center items-center mb-8">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mr-2" />
            <h2 className="text-2xl font-bold">Welcome To E-Tender</h2>
           
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>

            {error && <p className="text-red-500 mt-4">{error}</p>}
          </form>

          <div className="flex justify-center items-center mt-12">
            <button
              type="button"
              onClick={() => router.push("/Agency/signup")}
              className="mt-4 block underline hover:text-blue-500"
            >
              New Here?  Create an Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
