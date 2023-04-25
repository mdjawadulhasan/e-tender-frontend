import { useState, useEffect } from 'react';
import MyLayout from '@/pages/tender-manager/component/layout';
import UserLayout from './component/userdata';
import axios from 'axios';

export default function GetUsers() {
  const [userData, setUserData] = useState(null);
  //const email = sessionStorage.getItem('email');
const email="l";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/TenderManager/viewprofile/21`);
        setUserData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [email]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <MyLayout title="Profile" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">My Profile</h1>
        {userData ? <UserLayout data={userData} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}