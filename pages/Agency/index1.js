import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiLoginBoxFill, RiUserAddFill } from "react-icons/ri";
import { FiClipboard } from "react-icons/fi";

export default function Home() {
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: 23.777176,
    lng: 90.399452,
  };

  return (

    
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center justify-center py-16 bg-white w-full mt-6">
        <nav className="bg-white py-4 flex items-center justify-end px-8 pr-8 w-full absolute top-10 left-0">
          <Link href="/Agency/signin" passHref legacyBehavior>
            <a className=" mr-10 text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300">
              <RiLoginBoxFill className="mr-2" /> Login
            </a>
          </Link>
          <Link href="/Agency/signup" passHref legacyBehavior>
            <a className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-300">
              <RiUserAddFill className="mr-2" /> Register
            </a>
          </Link>
        </nav>

        <br></br>

        {/* <img 
          // src="../public/headerlogo.png"
          // alt="Tender Image"
          // className="w-100 h-20 object-contain absolute top-0 left-0 m-4"
        // />
*/}
        <h1 className="text-3xl font-bold mb-4">
          Welcome to E-Tender Application
        </h1>
        <p className="text-lg mb-6 text-center">
          Here you can view all Government tenders in one place.
        </p>
      </div>

      <div className="flex items-center justify-center w-full py-8">
        <FaMapMarkerAlt className="text-red-500 text-4xl mr-2" />
        <p className="text-lg font-medium text-gray-700">
          American International University-Bangladesh (AIUB)
          <br />
          408/1, Kuratoli, Khilkhet,
          <br />
          Dhaka 1229, Bangladesh
          <br />
          <a
            href="mailto:info@aiub.edu"
            className="text-blue-500 hover:underline"
          >
            info@tenders.com
          </a>
        </p>
      </div>

      <LoadScript
        googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        />
      </LoadScript>
    </div>
  );
}
