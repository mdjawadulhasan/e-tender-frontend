import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import SessionCheck from "./sessioncheck";

export default function MyLayout(props) {
  return (
    <>
      <SessionCheck />
      <Header title={props.title} />

      <nav className="flex items-center justify-between flex-wrap bg-black text-white p-2">

        <div className="flex items-center flex-shrink-0 mr-6">
          <Image src="/headerlogo.png" alt="me" width="164" height="100" />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/tender-manager" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
              Home
            </Link>
            <Link href="/tender-manager/profile" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
              Profile
            </Link>
            <Link href="/tender-manager/searchtenders" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
              Search Tenders
            </Link>
            <Link href="/tender-manager/tender/getalltender" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
              View Tenders
            </Link>
            <Link href="/tender-manager/tender/available" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
              Available Tenders
            </Link>
            <Link href="/tender-manager/tender/assigned" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
              Assigned Tenders
            </Link>
            <Link href="/tender-manager/tender/blocked" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
              Blocked Tenders
            </Link>
            <Link href="/tender-manager/tender/completed" className="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
              Completed Tenders
            </Link>
          </div>
        </div>
      </nav>

      

      <div className="fixed bottom-0 w-full bg-gray-900 text-white text-center ">
        E-Tender © {new Date().getFullYear()}
      </div>
    </>
  );
}
