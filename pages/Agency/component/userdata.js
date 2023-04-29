import Image from "next/image";


export default function UserLayout({ data }) {
  return (
    <div className="bg-white shadow-md rounded-lg px-10 py-6 mb-8 bg-green-400">
      <h2 className="text-2xl font-bold text-gray-800">{data.AgencyName}</h2>
      <h4 className=" text-lg">{data.Email}</h4>
      {/* <h4 className=" text-lg">{data.Noprojectcomleted}</h4> */}
      <div className="flex flex-col sm:flex-row mt-6">
        <div className="sm:w-1/3"></div>
        <div className="sm:w-2/3 sm:pl-6 mt-6 sm:mt-0">
          <div className="pb-6">
            <div className="flex justify-center">
              <div className="mt-1 mb-4 w-48 h-48 rounded-full overflow-hidden">
                <Image
                  className="object-cover w-full h-full max-w-full"
                  src={`http:/localhost:3000/Agency/getimage/${data.ImgfileName}`}
                  alt="Not Found "
                  width="500"
                  height="500"
                />
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
