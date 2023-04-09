import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function MyLayout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav>
        <Link href="/Agency"> Home</Link>
        <br></br>
        <Link href="/Agency/profile"> Profile</Link>
        <br></br>
        <Link href="/Agency/tender/getalltender"> Tenders</Link>
        <br></br>
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
