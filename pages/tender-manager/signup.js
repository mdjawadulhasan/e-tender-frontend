import { useState } from "react";
import MyLayout from "@/pages/tender-manager/component/layout";
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import axios from "axios"

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpeg", "image/png"];
    console.log(file.type);
    if (!allowedtypes.includes(file.type)) {
      console.log(file.type);
      return false;
    }
  
    return true;
  }



  const [success, setSuccess] = useState('')
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('myfile', data.myfile[0]);
    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3000/TenderManager/signup",
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });


      setSuccess('Signup successfull');
      reset();

    }
    catch (error) {
      console.log(error.response.data.message);

      setSuccess('Signup unsuccessfull ' + error.response.data.message);

    }


  };

  return (
    <>
      {/* <SessionCheck /> */}
      <MyLayout title="Signup" />
      <h1>Signup</h1>
      {success}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"

            {...register('name', { required: true })}
          />
          {errors.name && <p>Name is required</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email && (
            <p>
              {errors.email.type === 'required'
                ? 'Email is required'
                : 'Invalid email address'}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true, pattern: /^\d+$/, minLength: 5 })}
          />
          {errors.password && (
            <p>
              {errors.password.type === 'required'
                ? 'password is required'
                : 'Invalid password pattern'}
            </p>
          )}
        </div>

        <input
          type="file"
          id="myfile"
          {...register('myfile', { required: true, validate: validateFile })}
        />
        {errors.myfile &&
          <p>
            {errors.myfile.type === 'required'
              ? 'file is required'
              : 'invalid file'}
          </p>
        }



        <button type="submit">Submit</button>
      </form>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}
