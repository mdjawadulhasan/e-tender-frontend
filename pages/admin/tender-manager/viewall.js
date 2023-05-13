import { useState, useEffect } from "react";
import Link from "next/link";
import SideLayout from '@/pages/admin/component/sidebar';
import MyLayout from '@/pages/admin/component/layout';

export default function AdminDashboard() {
  const [megisters, setTenders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/TenderManager/all")
      .then((response) => response.json())
      .then((data) => setTenders(data));
  }, []);

  return (
    <>
      <MyLayout title="All Tender Manager" />
      <SideLayout />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10 ml-40">
     
     
        {megisters.map((mgst) => (
          <div key={mgst.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={`http://localhost:3000/TenderManager/getimage/${mgst.ImgfileName}`} alt="Construction" className="w-full h-48 object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{mgst.name}</h2>
              <p className="text-gray-700">{mgst.email}</p>
              <Link href={`/admin/tender-manager/${mgst.id}`} className="text-blue-500 hover:text-blue-700 mt-2 block">
                View Tender Manager
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
