import { useState, useEffect } from "react";
import axios from "axios";
import UserLayout from "./component/userdata";
import SideLayout from "./component/sidebar";
import Head from "next/head";
import MyLayout from "@/pages/Agency/component/layout";

export default function AgencyList() {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      const res = await axios.get("http://localhost:3000/Agency/all");
      setAgencies(res.data);
    };
    fetchAgencies();
  }, []);

  return (
    <>
      <MyLayout />

      <SideLayout />
      <div className="text-right">
        <h1 className="text-3xl font-bold mt-20 mr-20">All Agencies</h1>
      </div>
      <div className="container mx-auto px-2 ml-20 mt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-20 mt-10">
          {agencies.map((agency) => (
            <UserLayout key={agency.id} data={agency} className="w-4 h-4" />
          ))}
        </div>
      </div>
    </>
  );
}
