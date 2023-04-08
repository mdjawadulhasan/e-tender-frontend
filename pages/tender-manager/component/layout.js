import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function MyLayout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav>
        <Link href="/tender-manager"> Home</Link>
        <Link href="/tender-manager/profile"> Profile</Link>
        <Link href="/tender-manager/getauctionbids"> Auction Bids</Link>
        <Link href="/tender-manager/tender/getalltender"> View Tenders</Link>
        <Link href="/tender-manager/tender/available"> Available Tenders</Link>
        <Link href="/tender-manager/tender/assigned"> Assigned Tenders</Link>
        <Link href="/tender-manager/tender/blocked"> Blocked Tenders</Link>
        <Link href="/tender-manager/tender/completed"> Completed Tenders</Link>

        {/* <Link href="/tender-manager/signup"> Sign Up</Link>
        <Link href="/tender-manager/signin"> Sign in</Link> */}
      </nav>

      <Image src="/logo.png" alt="me" width="64" height="64" />

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
