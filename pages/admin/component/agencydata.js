import Image from "next/image";

export default function AgencyLayout({ data }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{data.AgencyName}</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{data.Email}</p>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {data.Status === 1 ? "Active" : "Blocked"}
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="flex justify-center">
            <div className="mt-1 mb-4 w-28 h-28 rounded-full overflow-hidden">
              <Image
                className="object-cover w-full h-full"
                src={`http:/localhost:3000/Admin/Agency/getimage/${data.ImgfileName}`}

                alt="me"
                width="150"
                height="150"
              />
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
}