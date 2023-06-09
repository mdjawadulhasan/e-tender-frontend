import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Validate() {

  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {

    const semail = sessionStorage.getItem('tempemail');
    console.log(semail);
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/TenderManager/validate', { otp, semail })

      sessionStorage.setItem('email', response.data);
      router.push("/tender-manager/profile");

    } catch (error) {
      setError("Invalid OTP")
      router.push("/tender-manager/sigin");
    }
  }

  return (
    <>
      <Head>
        <title>Validate</title>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </Head>

      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-md shadow-lg">
          <h6 className="text-3sl font-bold mb-1">5 Digit OTP have been sent to your email.</h6>
          <br></br>
          <div className="mb-5">
            <label htmlFor="otp" className="block font-medium text-gray-700 mb-2">OTP</label>
            <input type="text" id="otp" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} className="border border-gray-300 p-2 rounded-md w-full" required />
          </div>

          {error && <p className="text-red-500 mb-5">{error}</p>}

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Validate OTP</button>
        </form>
      </div>
    </>
  )
}
