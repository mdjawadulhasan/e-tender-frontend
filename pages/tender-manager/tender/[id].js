import MyLayout from "@/pages/tender-manager/component/layout";
import TenderLayout from "./tenderdata";
import axios from "axios";
import { useRouter } from "next/router";
import SideLayout from "../component/sidebar";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { useAuth } from "../useAuth";

export default function TenderView({ data }) {


  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const user = useAuth();

  


  const [success, setSuccess] = useState('')
  const onSubmit = async (data) => {


    const form = {
      Tendername: data.name,
      Projectlocation: data.projectLocation,
      LocationXCoordinate: data.locationXCoordinate,
      LocationYCoordinate: data.locationYCoordinate,
      Tenderbudget: data.tenderBudget,
      ProjectStartDate: data.projectStartDate,
      ProjectCmplttDate: data.projectCmplttDate,
      Deadline: data.deadline,
      Cmpltpercentege: data.Cmpltpercentege,
      Tendermanager: user.id,
      Agency: data.Agency ? data.Agency : null,
      Status: data.Status,
      id: data.id,

    };



    try {
      const response = await axios.put(`http://localhost:3000/Tenders/update`, form);
      router.push('/tender-manager/tender/getalltender')
      reset();
    } catch (error) {
      setSuccess('Update unsuccessful ' + error.response.data.message);
    }
  };


  const onDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/Tenders/delete/${data.id}`);
      router.push('/tender-manager/tender/getalltender')
    } catch (error) {
      setSuccess('Delete unsuccessful ' + error.response.data.message);
    }
  };

  return (
    <>
      <MyLayout title="View Tender" />
      <SideLayout />
      {success}

      <br></br>
      <br></br>
      <br></br>
      <br></br>  <br></br>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-1">


        <input
          type="hidden"
          id="id"
          {...register('id')}
          defaultValue={data.id}
        />


        <input
          type="hidden"
          id="Agency"
          {...register('Agency')}
          defaultValue={data.Agency}
        />

        <input
          type="hidden"
          id="Cmpltpercentege"
          {...register('Cmpltpercentege')}
          defaultValue={data.Cmpltpercentege}
        />

        <input
          type="hidden"
          id="Status"
          {...register('Status')}
          defaultValue={data.Status}
        />

        {/* -------------------------------- */}

        <div className="flex">
          <div className="w-1/2">
            <label htmlFor="name" className="block font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-400 p-2 rounded-md"
              {...register('name', { required: true })}
              defaultValue={data.Tendername}
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
              defaultValue={data.Projectlocation}
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
              defaultValue={data.LocationXCoordinate}
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
              defaultValue={data.LocationYCoordinate}
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
              defaultValue={data.Tenderbudget}
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
              defaultValue={new Date(data.ProjectStartDate).toISOString().split('T')[0]}

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
            defaultValue={new Date(data.ProjectCmplttDate).toISOString().split('T')[0]}

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
            defaultValue={new Date(data.Deadline).toISOString().split('T')[0]}

          />
          {errors.deadline && <p className="text-red-500">Project Complete Date is required</p>}
        </div>

        <br></br>
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>

        <button
        onClick={onDelete}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
      >
        Delete Tender
      </button>
      </form>


     

    </>
  );
}








export async function getServerSideProps(context) {
  const id = context.params.id;
  const response = await axios.get(
    "http://localhost:3000/tenders/viewTender/" + id
  );
  const exdata = await response.data;

  return { props: { data: exdata } };
}
