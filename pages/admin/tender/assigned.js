import { useState } from "react";
import Link from "next/link";
import MyLayout from "@/pages/tender-manager/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";

export default function GetUsers({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }
    const response = await axios.get(
      `http://localhost:3000/tenders/Ongoing/search-by-name/${searchTerm}`
    );
    const data = await response.data;
    setSearchResults(data);
  };
  

  const tenderData = searchResults.length > 0 ? searchResults : data;

  return (
    <>
      <MyLayout title="Assigned Tenders" />
      <SideLayout />
      <br />
      <br />
      <div className="flex-grow p-1 mt-10 ml-10">
        <div className="flex justify-center items-center mb-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search by Tender Name"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="px-2 py-1 border border-gray-400 rounded-l"
            />
            <button type="submit" className="px-4 py-1 bg-blue-500 text-white rounded-r">
              Search
            </button>
          </form>
        </div>

        <table className="min-w-full  text-center text-sm font-light">
          <thead>
            <tr className="bg-gray-200">
              <th className="border py-2 px-4">Tender Name</th>
              <th className="border py-2 px-4">View Details</th>
            </tr>
          </thead>
          <tbody>
            {tenderData.map((item) => (
              <tr key={item.id} className="bg-white">
                <td className="border py-2 px-4">{item.Tendername}</td>
                <td className="border py-2 px-4">
                  <Link href={"/tender-manager/tender/" + item.id}>
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("http://localhost:3000/tenders/Assigned");
  const data = await response.data;
  return { props: { data } };
}