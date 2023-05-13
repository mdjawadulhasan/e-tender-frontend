import React, { useState } from "react";
import Header from "./header";
import SessionCheck from "../sessioncheck";
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
        class="fixed top-20 left-0 z-40 w-44 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white shadow-md"
      >
        <div class="h-full px-3 py-4 overflow-y-auto">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={handleAgencyClick}
              >
                <img
                  src="/agencySide.png"
                  alt="agency icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />

                <span class="ml-1">Agency</span>
              </a>
              {showAgency && (
                <ul class="space-y-2 font-medium ml-6">
                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      <img
                        src="/create-svgrepo-com.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">Create</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
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
                      href="#"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
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
                      href="Agency/sendEmail"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
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

          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                onClick={handleTenderClick}
              >
                <img
                  src="/tender.png"
                  alt="agency icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-1">Tender</span>
              </a>
              {showTender && (
                <ul class="space-y-2 font-medium ml-6">
                  <li>
                    <a
                      href="Agency/tender/getalltender"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
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
                      href="Agency/alltender"
                      class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                    >
                      <img
                        src="/all.png"
                        alt="search icon"
                        class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                      />
                      <span class="ml-3">All Tender</span>
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