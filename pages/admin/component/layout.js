import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function MyLayout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav>
        <Link href="/admin"> Home</Link>
        <br></br>
        <Link href="/admin/profile"> Profile</Link>
        <br></br>
        <Link href="/admin/tm/tendermanagers"> View TenderManagers</Link>
        <br></br>
        <Link href="/admin/tender/tenders"> View Tenders</Link>
        <br></br>
        <Link href="/admin/tender/searchtenders"> Search Tenders</Link>
        <br></br>
        <Link href="/admin/mgst/Megister"> View All Megister</Link>
        <br></br>
        <Link href="/admin/agency/agency"> View All Agency</Link>
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
      ></div>
    </>
  );
}
