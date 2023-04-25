import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MyLayout from '@/pages/tender-manager/component/layout';
import UserLayout from './component/userdata';
import axios from 'axios';

export default function GetUsers() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {

    
    const email = sessionStorage.getItem('email');
    if (!email) {
      router.push('/tender-manager/signin');
      return;
    }

    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/TenderManager/viewprofilebyemail/${email}`);
        setUserData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [router]);

  const handleUpdateClick = () => {

    router.push(`/tender-manager/update`);

  };

  return (
    
    <div className="bg-white-50 min-h-screen">
      <MyLayout title="Profile" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">My Profile</h1>
        <div className="flex justify-end mb-4">

        </div>
        {userData ? <UserLayout data={userData} /> : <p>Loading...</p>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleUpdateClick}
        >
          Update
        </button>
      </div>


    </div>
  );
}
