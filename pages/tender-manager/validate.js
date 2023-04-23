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
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/TenderManager/validate', { otp,semail })
      console.log("result: " + response.data)
      sessionStorage.setItem('email', response.data);
      router.push("/tender-manager/profile");

    } catch (error) {
      setError("Invalid OTP")
    }
  }



  return (
    <>
      <Head>
        <title>Validate </title>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </Head>

      <form onSubmit={handleSubmit}>
        <label>
        otp
          <input type="otp" value={otp} onChange={(e) => setOtp(e.target.value)} />
        </label>
        <br />
        <button type="submit">Validate OTP</button>
        {error && <p >{error}</p>}

      </form>
    </>
  )
}
