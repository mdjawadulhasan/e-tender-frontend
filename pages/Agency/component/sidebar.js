import Header from "./header";
import SessionCheck from "./sessioncheck";

export default function SideLayout(props) {
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
                href="Agency/signup"
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
                  src="/search.png"
                  alt="search icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-3">Search</span>
              </a>
            </li>
            <li>
              <a
                href="Agency/allAgency"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <img
                  src="/all.png"
                  alt="search icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-3">View All </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <img
                  src="/avl.png"
                  alt="search icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-3">Available</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <img
                  src="/asgnd.png"
                  alt="search icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-3">Assigned</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <img
                  src="/blocked.png"
                  alt="search icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-3">Blocked</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
              >
                <img
                  src="/cmplt.png"
                  alt="search icon"
                  class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-black"
                />
                <span class="ml-3">Completed</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
