import React, { useState, useEffect } from "react";
import axios from "axios";
import MyLayout from '@/pages/admin/component/layout';
import { FaGavel, FaHourglass, FaCheckCircle, FaUserTie, FaBuilding, FaBook } from 'react-icons/fa';

export default function Dashboard() {
  const [auctions, setAuctions] = useState(0);
  const [ongoing, setOngoing] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [tenderCount, setTenderCount] = useState(0);
  const [agencyCount, setAgencyCount] = useState(0);
  const [magisterCount, setMagisterCount] = useState(0);

  useEffect(() => {
    axios
      .all([
        axios.get("http://localhost:3000/Admin/Tender/Reports/Auction"),
        axios.get("http://localhost:3000/Admin/Tender/Reports/Ongoing"),
        axios.get("http://localhost:3000/Admin/Tender/Reports/Completed"),
        axios.get("http://localhost:3000/Admin/Tendermanager/totalcount"),
        axios.get("http://localhost:3000/Admin/Agency/totalcount"),
        axios.get("http://localhost:3000/Admin/Magister/totalcount"),
      ])
      .then(
        axios.spread((auctionsRes, ongoingRes, completedRes, tenderCountRes, agencyCountRes, magisterCountRes) => {
          setAuctions(auctionsRes.data);
          setOngoing(ongoingRes.data);
          setCompleted(completedRes.data);
          setTenderCount(tenderCountRes.data);
          setAgencyCount(agencyCountRes.data);
          setMagisterCount(magisterCountRes.data);
        })
      )
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  
  return (
    <div className="h-screen bg-gray-100 mt-20">
      <MyLayout title="Dashboard" />
      <div className="mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-semibold mb-4 text-center">Admin Dashboard</h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Auctions card */}
          <div className="bg-blue-500 rounded-lg p-4 flex items-center text-white">
            <div className="mr-4">
              <FaGavel size={40} />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Auctions</h2>
              <p className="text-4xl font-bold">{auctions}</p>
            </div>
          </div>
  
          {/* Ongoing card */}
          <div className="bg-yellow-500 rounded-lg p-4 flex items-center text-white">
            <div className="mr-4">
              <FaHourglass size={40} />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Ongoing Tenders</h2>
              <p className="text-4xl font-bold">{ongoing}</p>
            </div>
          </div>
  
          {/* Completed card */}
          <div className="bg-green-500 rounded-lg p-4 flex items-center text-white">
            <div className="mr-4">
              <FaCheckCircle size={40} />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Completed Tenders</h2>
              <p className="text-4xl font-bold">{completed}</p>
            </div>
          </div>
  
          {/* Tender Manager count card */}
          <div className="bg-purple-500 rounded-lg p-4 flex items-center text-white">
            <div className="mr-4">
              <FaUserTie size={40} />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Tender Managers</h2>
              <p className="text-4xl font-bold">{tenderCount}</p>
            </div>
          </div>
  
          {/* Agency count card */}
          <div className="bg-red-500 rounded-lg p-4 flex items-center text-white">
            <div className="mr-4">
              <FaBuilding size={40} />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Agencies</h2>
              <p className="text-4xl font-bold">{agencyCount}</p>
            </div>
          </div>
  
          {/* Magister count card */}
          <div className="bg-pink-500 rounded-lg p-4 flex items-center text-white">
            <div className="mr-4">
              <FaBook size={40} />
            </div>
            <div>
              <h2 className="text-lg font-medium mb-4">Magisters</h2>
              <p className="text-4xl font-bold">{magisterCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}
