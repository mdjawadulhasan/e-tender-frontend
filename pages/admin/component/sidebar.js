import Header from "./header";
import SessionCheck from "./sessioncheck";
import React, { useState } from "react";

export default function SideLayout(props) {

    const [showMagister, setShowMagister] = useState(false);
    const [showTender, setShowTender] = useState(false);

    const handleMagisterClick = () => {
        setShowMagister(!showMagister);
    };

    const handleTenderClick = () => {
        setShowTender(!showTender);
    };
    return (
        <>
            <SessionCheck />
            {<aside id="default-sidebar" class="fixed top-20 left-0 z-40 w-44 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white shadow-md">
                <div class="h-full px-3 py-4 overflow-y-auto">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                onClick={handleMagisterClick}
                            >
                                <img
                                    src="/mgst.png"
                                    alt="agency icon"
                                    class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                                />
                                <span class="ml-1">Magister</span>
                            </a>
                            {showMagister && (
                                <ul class="space-y-2 font-medium ml-6">
                                    <li>
                                        <a
                                            href="/admin/magister/create"
                                            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
                                        >
                                            <img
                                                src="/create-svgrepo-com.png"
                                                alt="search icon"
                                                class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                                            />
                                            <span class="ml-3">Create Magister</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/admin/magister/viewall"
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
                                    src="/money.png"
                                    alt="agency icon"
                                    class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                                />
                                <span class="ml-1">Tender</span>
                            </a>
                            {showTender && (
                                <ul class="space-y-2 font-medium ml-6">
                                    <li>
                                        <a
                                            href="/admin/tender/available"
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



                                </ul>
                            )}
                        </li>

                        <li>
                            <a href="/admin/tender-manager/viewall" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                                <img src="/mgst.png" alt="search icon" class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" />
                                <span class="ml-3">Tender Manager</span>
                            </a>
                        </li>

                        <li>
                            <a href="/admin/agency/viewall" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100">
                                <img src="/mgst.png" alt="search icon" class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black" />
                                <span class="ml-3">Agency</span>
                            </a>
                        </li>


                    </ul>
                </div>
            </aside>}
        </>
    );
}
