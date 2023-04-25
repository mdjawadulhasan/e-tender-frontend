import { useState, useEffect } from "react";
import Link from "next/link";
import MyLayout from "@/pages/tender-manager/component/layout";

export default function AdminDashboard() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tenders/all")
      .then((response) => response.json())
      .then((data) => setTenders(data));
  }, []);

  return (
    <>
      <MyLayout title="Dashboard" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {tenders.map((tender) => (
          <div key={tender.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://source.unsplash.com/800x600/?construction" alt="Construction" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{tender.title}</h2>
              <p className="text-gray-700">{tender.description}</p>
              <Link href={`/tender-manager/tender/${tender.id}`} className="text-blue-500 hover:text-blue-700 mt-2 block">
                View Tender
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
