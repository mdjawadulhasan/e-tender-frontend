import Link from "next/link";
import { useState, useEffect } from "react";
import MyLayout from "@/pages/Agency/component/layout";
import axios from "axios";
import SideLayout from "../component/sidebar";
import { useAuth } from "../useAuth";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default function GetUsers() {
  const [data, setData] = useState([]);
  const user = useAuth();

  useEffect(() => {
    async function fetchData() {
      if (user != null) {
        console.log(user.id);
        const response = await axios.get(
          "http://localhost:3000/Agency/TendersByAgency/" + user.id
        );
        const data = await response.data;
        setData(data);
        // data.map((item) =>
        // console.log(item.tenders.map((tender) => tender.Tendername))
        // );
      } else {
        console.log("null");
      }
    }
    fetchData();
  }, [user]);
  console.log(data);
  const tenders = data.map((item) =>
    item.tenders.map((tender) => {
      return {
        Tendername: tender.Tendername,
        Tenderlocation: tender.Projectlocation,
        id: tender.id,
      };
    })
  );

  console.log(tenders);

  return (
    <>
      <MyLayout title="View Tenders" />
      <SideLayout />
      <br />
      <br />
      <br />
      <div className="container mx-auto p-4">
        <div className="flex-grow flex justify-center items-center mt-20">
          <div className="w-3/4 sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
            {data.map((item) => (
              <Card key={item.id} className="mb-6">
                <Card.Header className="bg-white px-4 py-3 text-lg font-medium"></Card.Header>
                <Card.Body>
                  {item.tenders.map((tender) => (
                    <Card key={tender.id} className="mb-6">
                      <Card.Header className="bg-gray-200 px-4 py-3 text-lg font-medium">
                        {tender.Tendername}
                      </Card.Header>
                      <Card.Body className="px-4 py-3 bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-2">
                              Location
                            </div>
                            <div className="text-lg font-medium">
                              {tender.Projectlocation}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-500 mb-2">
                              Previous Budget
                            </div>
                            <div className="text-lg font-medium">
                              {tender.Tenderbudget}
                            </div>
                          </div>
                          <div className="item-left">
                            <Link href={`/Agency/Budget/${tender.id}`}>
                              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300 ease-in-out">
                                Create Budget
                              </button>
                            </Link>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>{" "}
        <Link href="/Agency/profile">
          <button className=" ml-20  mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out">
            Back
          </button>
        </Link>
      </div>
    </>
  );
}
