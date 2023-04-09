import { useState } from "react";
import Link from "next/link";
import MyLayout from "@/pages/Agency/component/layout";

export default function update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    //
  };

  return (
    <>
      <MyLayout title="Update " />
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <br />
        <label>
          New Email:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <br />
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Edit</button>
      </form>
      <p></p>
    </>
  );
}
