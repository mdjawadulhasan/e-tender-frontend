import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import SessionCheck from "./sessioncheck";
import SideLayout from "./sidebar";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import router from "next/router";
export default function MyLayout(props) {
  const handleSignOut = async (event) => {
    console.log(event);
    event.preventDefault();
    try {
      const response = await axios.get("http://localhost:3000/Agency/signout");
      console.log(response.data);
      sessionStorage.removeItem("Email");
      router.push("/Agency/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SessionCheck />
      <SideLayout />
      <Header title={props.title} />

      <nav class="fixed top-0 z-10 flex items-center justify-between flex-wrap bg-white text-black p-2 shadow-md w-full ">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Image src="/headerlogo.png" alt="me" width="164" height="100" />
        </div>
        <div className="flex-grow w-auto md:mr-20">
          <div className="text-lg flex-grow flex justify-end">
            {/* <Link 
              // href="/Agency/"
              // className=" ml-10 inline-block mt-2 hover:bg-gray-100 text-lg mr-10"
            // >
              {/* Home */}
            {/* </Link> */}
            <Link
              href="/Agency/profile"
              className="mt-1 inline-block hover:bg-gray-100 mr-10"
            >
              Profile
            </Link>

            <button onClick={handleSignOut}>
              <FiLogIn className="w-8 h-8 text-gray-500 transition duration-75 group-hover:text-red" />
            </button>
          </div>
        </div>
      </nav>

      <div className="fixed bottom-0 w-full bg-white text-black text-center shadow-lg">
        E-Tender © {new Date().getFullYear()}
      </div>
    </>
  );
}
