import { useState } from "react";
import axios from "axios";
import UserLayout from "./component/userdata";
import SideLayout from "./component/sidebar";
import MyLayout from "@/pages/Agency/component/layout";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/Agency/search/${searchTerm}`
      );
      setSearchResults(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MyLayout />

      <SideLayout />
      <div className="text-right">
        <h1 className="text-3xl font-bold mt-20 mr-20">Search Agencies</h1>
      </div>

      <div className="container mx-auto px-2 ml-20 mt-10 text-center ">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none "
            placeholder="Search  Agency By name"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
          >
            Search
          </button>
        </form>
      </div>
      <div className="ml-20 mt-20">
        {searchResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-20 mt-20 ">
            {searchResults.map((agency) => (
              <UserLayout key={agency.id} data={agency} className="w-4 h-4" />
            ))}
          </div>
        ) : (
          <p className="ml-20 mt-10 text-center ">No results found.</p>
        )}
      </div>
    </>
  );
}
