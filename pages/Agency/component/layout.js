import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import SessionCheck from "./sessioncheck";
import SideLayout from "./sidebar";

export default function MyLayout(props) {
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
            <Link
              href="/Agency"
              className=" ml-10 inline-block mt-2 hover:bg-gray-100 text-lg mr-10"
            >
              Home
            </Link>
            <Link
              href="/Agency/profile"
              className="mt-2 inline-block hover:bg-gray-100 mr-4"
            >
              Profile
            </Link>
            {/* <Link href="/Agency/tender/getalltender" className="block mt-4 lg:inline-block lg:mt-0 hover:bg-gray-100 mr-4"> */}
            {/* Tenders */}
            {/* </Link> */}
          </div>
        </div>
      </nav>

      <div className="fixed bottom-0 w-full bg-white text-black text-center shadow-lg">
        E-Tender © {new Date().getFullYear()}
      </div>
    </>
  );
}
