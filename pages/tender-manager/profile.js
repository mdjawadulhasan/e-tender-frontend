import { useState, useEffect } from 'react';
import MyLayout from '@/pages/tender-manager/component/layout';
import UserLayout from './component/userdata';
import axios from 'axios';

export default function GetUsers() {
  const [userData, setUserData] = useState(null);
  const email = sessionStorage.getItem('email');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/TenderManager/viewprofilebyemail/${email}`);
        setUserData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [email]);

  return (
    <>
      <MyLayout title="Profile" />
      <h1>User Profile</h1>
      {userData ? <UserLayout data={userData} /> : <p>Loading...</p>}
     
    </>
  );
}
