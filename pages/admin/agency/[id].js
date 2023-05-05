import router from 'next/router';
import Swal from 'sweetalert2'
import SideLayout from '@/pages/admin/component/sidebar';
import MyLayout from '@/pages/admin/component/layout';
import axios from 'axios';
import AgencyLayout from '../component/agencydata';

export default function GetUsers({ data }) {
  const userData = data;

  

  const handleDeleteClick = () => {
    fetch(`http://localhost:3000/Admin/Agency/DeleteById/${userData.id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        if (data.statusCode === 500) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Cannot delete due to dependency issues!',
            footer: ''
          });
        } else {
          Swal.fire(
            'Deleted!',
            '',
            'success'
          )

          router.push("/admin/agency/viewall");
        }
      })
      .catch(error => console.log(error)); // handle the error


  };




  return (
    <div className="bg-white-50 min-h-screen mt-8" >
      <MyLayout title="Agency Details" />
      <SideLayout />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userData ? <AgencyLayout data={userData} /> : <p>Loading...</p>}


        <div className="flex justify-between mb-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>


    </div>
  );
}


export async function getServerSideProps(context) {
  const id = context.params.id;
  const response = await axios.get(
    "http://localhost:3000/Admin/Agency/FindAgencyByid/" + id
  );
  const exdata = await response.data;

  return { props: { data: exdata } };
}
