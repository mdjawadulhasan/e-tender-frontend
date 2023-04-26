import { useState } from "react";
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import axios from "axios"
import { useAuth } from "../useAuth";
import MyLayout from "../component/layout";
import SideLayout from "../component/sidebar";


export default function Create() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const user = useAuth();


    const [success, setSuccess] = useState('')
    const onSubmit = async (data) => {

        console.log(data);
        const form = {
            Tendername: data.name,
            Projectlocation: data.projectLocation,
            LocationXCoordinate: data.locationXCoordinate,
            LocationYCoordinate: data.locationYCoordinate,
            Tenderbudget: data.tenderBudget,
            ProjectStartDate: data.projectStartDate,
            ProjectCmplttDate: data.projectCmplttDate,
            Deadline: data.deadline,
            Cmpltpercentege: 0,
            Tendermanager: user.id,
            AgencyId: null,
            Status: 0,
        };

        try {
            const response = await axios.post(`http://localhost:3000/Tenders/create`, form);
            router.push('/tender-manager/tender/getalltender')
            reset();
        } catch (error) {
            setSuccess('Update unsuccessful ' + error.response.data.message);
        }
    };


    return (
        <>
        <MyLayout title="Create Tender" />
            <SideLayout />
            {success}
           
            <br></br>
            <br></br>
            <br></br>
            <br></br>  <br></br>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-1">
                <div className="flex">
                    <div className="w-1/2">
                        <label htmlFor="name" className="block font-medium">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            {...register('name', { required: true })}
                        />
                        {errors.name && <p className="text-red-500">Name is required</p>}
                    </div>

                    <div className="w-1/2 ml-2">
                        <label htmlFor="projectLocation" className="block font-medium">Project Location</label>
                        <input
                            type="text"
                            id="projectLocation"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            {...register('projectLocation', { required: true })}
                        />
                        {errors.projectLocation && <p className="text-red-500">Project Location is required</p>}
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2">
                        <label htmlFor="locationXCoordinate" className="block font-medium">Location X Coordinate</label>
                        <input
                            type="number"
                            id="locationXCoordinate"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            {...register('locationXCoordinate', { required: true })}
                        />
                        {errors.locationXCoordinate && <p className="text-red-500">Location X Coordinate is required</p>}
                    </div>
                    <div className="w-1/2 ml-2">
                        <label htmlFor="locationYCoordinate" className="block font-medium">Location Y Coordinate</label>
                        <input
                            type="number"
                            id="locationYCoordinate"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            {...register('locationYCoordinate', { required: true })}
                        />
                        {errors.locationYCoordinate && <p className="text-red-500">Location Y Coordinate is required</p>}
                    </div>
                </div>

                <div className="flex">
                    <div className="w-1/2">
                        <label htmlFor="tenderBudget" className="block font-medium">Tender Budget</label>
                        <input
                            type="number"
                            id="tenderBudget"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            {...register('tenderBudget', { required: true })}
                        />
                        {errors.tenderBudget && <p className="text-red-500">Tender Budget is required</p>}
                    </div>
                    <div className="w-1/2 ml-2">
                        <label htmlFor="projectStartDate" className="block font-medium">Project Start Date</label>
                        <input
                            type="date"
                            id="projectStartDate"
                            className="w-full border border-gray-400 p-2 rounded-md"
                            {...register('projectStartDate', { required: true })}
                        />
                        {errors.projectStartDate && <p className="text-red-500">Project Start Date is required</p>}
                    </div>
                </div>



                <div>
                    <label htmlFor="projectCmplttDate" className="block font-medium">Project Completion Date</label>
                    <input
                        type="date"
                        id="projectCmplttDate"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('projectCmplttDate', { required: true })}
                    />
                    {errors.projectCmplttDate && <p className="text-red-500">Project Complete Date is required</p>}
                </div>


                <div>
                    <label htmlFor="deadline" className="block font-medium">Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        className="w-full border border-gray-400 p-2 rounded-md"
                        {...register('deadline', { required: true })}
                    />
                    {errors.deadline && <p className="text-red-500">Project Complete Date is required</p>}
                </div>

                <br></br>
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
