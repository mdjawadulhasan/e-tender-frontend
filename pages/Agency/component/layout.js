import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function MyLayout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav>
        <Link href="/Agency">
          <h3>Home</h3>
        </Link>
        <Link href="/Agency/profile">
          {" "}
          <h3>Profile</h3>{" "}
        </Link>
        <Link href="/Agency/tender/getalltender">
          <h3>Tenders </h3>
        </Link>

        <Link href="/Agency/Budget/viewBudget">
          <h3>View Budget </h3>{" "}
        </Link>

        <Link href="/Agency/viewBid">
          <h3>View Bid </h3>{" "}
        </Link>

        <Link href="/Agency/Budget/getallBudget">
          {" "}
          <h3>View All Budget </h3>
        </Link>

        <Link href="/Agency/feedback/">
          {" "}
          <h3>Feed Back </h3>
        </Link>

        <Link href="/Agency/update/">
          {" "}
          <h3>Update </h3>
        </Link>

        <Link href="/Agency/PreviousProject/">
          {" "}
          <h3>Previous Project </h3>
        </Link>
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
      ></div>
    </>
  );
}
