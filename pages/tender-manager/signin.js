import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/TenderManager/signin', { email, password })
      var b = response.data;
      if (b) {
        sessionStorage.setItem('tempemail', response.data);
        console.log(response.data);
        router.push("/tender-manager/validate");
      }
      else {
        setError("Invalid login Credentials ")
      }

    } catch (error) {
      setError("Invalid login Credentials", error)
    }
  }



  return (
    <>
      <Head>
        <title>Sign In</title>
        <link rel="icon" type="image/x-icon" href="/logo.png"></link>
      </Head>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
        {error && <p >{error}</p>}

      </form>
    </>
  )
}
