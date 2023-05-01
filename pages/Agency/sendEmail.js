import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideLayout from "./component/sidebar";
import MyLayout from "@/pages/Agency/component/layout";

const SendEmailForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("text", text);
    if (file) {
      formData.append("file", file);
    }

    try {
      const response = await fetch(`http://localhost:3000/Agency/sendemail`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(result.text || "Something went wrong");
      }
    } catch (error) {
      setError(error.text || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SideLayout />
      <MyLayout />
      <br></br> <br></br> <br></br> <br></br>
      <form
        onSubmit={handleSubmit}
        className="mx-auto my-8 p-8 bg-white rounded-lg shadow-lg max-w-md bg-green-300"
      >
        <div className="flex items-center mb-4 ml-20">
          <HiOutlineMail className="text-5xl text-red-500 mr-2" />
          <h2 className="text-2xl font-bold">Send Email</h2>
        </div>
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
        />
        <label
          htmlFor="subject"
          className="block font-medium text-gray-700 mb-2"
        >
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
        />
        <label htmlFor="text" className="block font-medium text-gray-700 mb-2">
          Text:
        </label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
        />
        <label htmlFor="file" className="block font-medium text-gray-700 mb-2">
          File:
        </label>
        <input
          type="file"
          id="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="border border-gray-300 rounded-lg py-2 px-4 mb-4 w-full"
        />
        {isLoading ? (
          <div className="text-center">
            <FontAwesomeIcon icon={faSpinner} spin /> {/* add this line */}
          </div>
        ) : (
          <>
            {error && (
              <p style={{ color: "red" }} className="text-center">
                {error}
              </p>
            )}
            {success && (
              <p style={{ color: "green" }} className="text-center">
                Email sent successfully!
              </p>
            )}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Send Email
            </button>
          </>
        )}
      </form>
    </>
  );
};

export default SendEmailForm;
