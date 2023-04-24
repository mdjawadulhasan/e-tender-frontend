import Header from "./header";
import Link from "next/link";
import Image from "next/image";
import SessionCheck from "./sessioncheck";


export default function MyLayout(props) {

  return (
    <>
      <SessionCheck />
      <Header title={props.title} />
     
      <nav>
        <Link href="/tender-manager"> Home</Link>
        <br></br>
        <Link href="/tender-manager/profile"> Profile</Link>
        <br></br>
        <Link href="/tender-manager/searchtenders"> Search Tenders</Link>
        <br></br>
        <Link href="/tender-manager/tender/getalltender"> View Tenders</Link>
        <br></br>
        <Link href="/tender-manager/tender/available"> Available Tenders</Link>
        <br></br>
        <Link href="/tender-manager/tender/assigned"> Assigned Tenders</Link>
        <br></br>
        <Link href="/tender-manager/tender/blocked"> Blocked Tenders</Link>
        <br></br>
        <Link href="/tender-manager/tender/completed"> Completed Tenders</Link>
      </nav>

      <Image src="/headerlogo.png" alt="me" width="164" height="100" />

      <main></main>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        E-Tender © Copyright 2023
      </div>
    </>
  );
}
