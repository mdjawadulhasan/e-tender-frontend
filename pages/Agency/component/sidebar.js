import React, { useState } from "react";
import Header from "./header";
import SessionCheck from "./sessioncheck";
export default function SideLayout(props) {
  const [showAgency, setShowAgency] = useState(false);

  const [showTender, setShowTender] = useState(false);

  const handleAgencyClick = () => {
    setShowAgency(!showAgency);
  };

  const handleTenderClick = () => {
    setShowTender(!showTender);
  };

  return (
    <>
      <SessionCheck />

      <aside
        id="default-sidebar"
        class=" fixed top-16 left-0 z-40 w-44 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-md -0  bg-white"
      >
        <div class="h-full px-3 py-4 overflow-y-auto mt-4   font-bold ">
          <ul class="space-y-2 font-medium font-bold">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                onClick={handleAgencyClick}
              >
                <img
                  class="w-6 h-6 icon-white transition duration-75 group-hover:text-black filter brightness-0 invert-1"
                  src="/agencySide.png"
                  alt="agency icon"
                />

                <span class="ml-1 text-lg  font-bold ">Agency</span>
              </a>

              {showAgency && (
                <ul class="space-y-2 font-medium ml-6">
                  <li>
                    <a
                      href="/Agency/signup"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                    >
                      <img
                        src="/create-svgrepo-com.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3 ">Create</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/Agency/allAgency"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                    >
                      <img
                        src="/all.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">View All</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/Agency/searchAgency"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                    >
                      <img
                        src="/search.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">Search</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/Agency/sendEmail"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                    >
                      <img
                        src="/email.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">Email</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* for tender */}

          <ul class="space-y-2 font-medium mt-8">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                onClick={handleTenderClick}
              >
                <img
                  src="/tender.png"
                  alt="agency icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-1  text-lg font-bold">Tender</span>
              </a>
              {showTender && (
                <ul class="space-y-2 font-medium ml-6">
                  <li>
                    <a
                      href="/Agency/tender/getalltender"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                    >
                      <img
                        src="/create-svgrepo-com.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">Create Bid</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Agency/tender/alltender"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                    >
                      <img
                        src="/all.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">All Tender</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="/Agency/Budget/budgetRequest"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500"
                    >
                      <img
                        src="/money.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">Budget</span>
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
