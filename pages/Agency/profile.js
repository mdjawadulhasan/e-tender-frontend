import { useAuth } from "./useAuth";
import MyLayout from "@/pages/Agency/component/layout";
import UserLayout from "./component/userdata";
import router from "next/router";
import SideLayout from "@/pages/Agency/component/sidebar";
// import Swal from "sweetalert2";

export default function GetUsers() {
  const userData = useAuth();

  const handleUpdateClick = () => {
    router.push(`/Agency/update`);
  };

  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/Agency/delete/${userData.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode === 500) {
          alert("Can't Delete ");
        } else {
          alert("Are You Sure Delete User");

          router.push("/Agency/signin");
        }
      })
      .catch((error) => console.log(error)); // handle the error
  };

  return (
    <>
      <SideLayout />
      <div className="bg-white min-h-screen mt-8">
        <MyLayout title="Profile" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-white mb-4 ">My Profile</h1>
          <div className="flex justify-end mb-4"></div>
          {userData ? <UserLayout data={userData} /> : <p>Loading...</p>}

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleUpdateClick}
          >
            Update
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-5"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
