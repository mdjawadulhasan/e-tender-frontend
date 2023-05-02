import { useState } from "react";
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import axios from "axios"
import Head from 'next/head';
import Swal from 'sweetalert2'
import MyLayout from '@/pages/admin/component/layout';
import SideLayout from '@/pages/admin/component/sidebar';
import { useAuth } from "../useAuth";

export default function createMagister() {

    const userData = useAuth();

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
        formData.append('Admin', userData.id);
        console.log(formData);
        try {
            const response = await axios.post("http://localhost:3000/megister/signup",
                formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            Swal.fire(
                'Creation successfull!',
                'View All',
                'success'
            )
            reset();

        }
        catch (error) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Creation unsuccessful!'

            })

        }


    };

    return (
        <>
            <MyLayout />
            <SideLayout/>
            <Head>
                <title>Create Magister</title>
                <link rel="icon" type="image/x-icon" href="/logo.png"></link>
            </Head>
           
            {success}
            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="max-w-sm mx-auto mt-20">
                <div>
                    <label htmlFor="name" className="block font-medium">Name</label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <p className="text-red-500">Name is required</p>}
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
                    />
                    {errors.email && (
                        <p className="text-red-500">
                            {errors.email.type === 'required'
                                ? 'Email is required'
                                : 'Invalid email address'}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="block font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('password', { required: true, pattern: /^\d+$/, minLength: 5 })}
                    />
                    {errors.password && (
                        <p className="text-red-500">
                            {errors.password.type === 'required'
                                ? 'password is required'
                                : 'Invalid password pattern'}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="myfile" className="block font-medium">File</label>
                    <input
                        type="file"
                        id="myfile"
                        className="w-full"
                        {...register('myfile', { required: true, validate: validateFile })}
                    />
                    {errors.myfile && (
                        <p className="text-red-500">
                            {errors.myfile.type === 'required'
                                ? 'File is required'
                                : 'Invalid file'}
                        </p>
                    )}
                </div>
                <br>
                </br>
                <button
                    type="submit"
                    className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"

                >
                    Create
                </button>
            </form>

          



        </>
    );

}