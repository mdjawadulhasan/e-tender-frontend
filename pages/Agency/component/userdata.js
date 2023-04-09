import Image from "next/image";

export default function UserLayout({ data }) {
  return (
    <>
      <h3>Name : {data.name}</h3>
      <h3>Email : {data.email}</h3>
      <Image
        src={"http:/localhost:3000/Agency/getimage/" + data.ImgfileName}
        alt="me"
        width="150"
        height="150"
      />
    </>
  );
}
