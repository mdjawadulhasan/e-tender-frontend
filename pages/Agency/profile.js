import { useAuth } from "./useAuth";
import MyLayout from "@/pages/Agency/component/layout";
import UserLayout from "./component/userdata";
import router from "next/router";
import SideLayout from "@/pages/Agency/component/sidebar";

export default function GetUsers() {
  const userData = useAuth();

  // const handleUpdateClick = () => {
  // router.push(`/Agency/update`);
  // };

  return (
    <div className="bg-white-50 min-h-screen mt-8">
      <MyLayout title="Profile" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">My Profile</h1>
        <div className="flex justify-end mb-4"></div>
        {userData ? <UserLayout data={userData} /> : <p>Loading...</p>}
        {/* <button */}
        {/* className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" */}
        {/* onClick={handleUpdateClick} */}
        {/* > */}
        {/* Update */}
        {/* </button> */}
      </div>
    </div>
  );
}
