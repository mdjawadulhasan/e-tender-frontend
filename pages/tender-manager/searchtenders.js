import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import MyLayout from "@/pages/tender-manager/component/layout";
import TenderLayout from "./tender/tenderdata";

export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    router.push({
      pathname: "searchtenders",
      query: { inputValue: inputValue },
    });
  };

  return (
    <>
      <MyLayout />
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data.length === 0 ? (
          <p>No data found</p>
        ) : (
          data.map((tender) => <TenderLayout key={tender.id} data={tender} />)
        )}
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
    const response = await axios.get(
      "http://localhost:3000/tenders/available/search-by-name/" + inputValue
    );
    const data = await response.data;
    console.log(data);
  

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: { status: "Enter Valid Name" },
      },
    };
  }
}
