import Header from "./header";
import Link from "next/link";
import Image from "next/image";

export default function MyLayout(props) {
  return (
    <>
      <Header title={props.title} />
      <nav>
        <Link href="/magister">
          <h3>Home</h3>
        </Link>
        <Link href="/magister/profile">
          {" "}
          <h3>Profile</h3>{" "}
        </Link>
        <Link href="/magister/feedbackById">
          <h3>Feedback </h3>
        </Link>

        <Link href="/magister/Budget/viewBudget">
          <h3>View Budget </h3>{" "}
        </Link>

        {/* <Link href="/Agency/viewBid"> */}
        {/* <h3>View Bid </h3>{" "} */}
        {/* </Link> */}

        <Link href="/magister/Budget/getallBudget">
          {" "}
          <h3>View All Budget </h3>
        </Link>

        {/* <Link href="/Agency/feedback/"> */}
        {/* {" "} */}
        {/* <h3>Feed Back </h3> */}
        {/* </Link> */}

        <Link href="/magister/update/">
          {" "}
          <h3>Update </h3>
        </Link>

        <Link href="/magister/createFeedBack/">
          {" "}
          <h3>Create FeedBack</h3>
        </Link>
        <Link href="/magister/Budget/budgetReqAccept/">
          {" "}
          <h3>Budget Accept </h3>
        </Link>
        <Link href="/magister/Budget/budgetReqDelete/">
          {" "}
          <h3>Budget Delete</h3>
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
