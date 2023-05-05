import { useRouter } from 'next/router'
import axios from 'axios'
import MyLayout from '../component/layout'
import SideLayout from '../component/sidebar'
import Swal from 'sweetalert2'

export default function ViewTender({ data }) {
  const router = useRouter()

  const tendermanagerName = data.Tendermanager?.name || 'Not assigned yet'
  const agencyName = data.Agency?.AgencyName || 'Not assigned yet'
  const onDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/Tenders/delete/${data.id}`);
      Swal.fire(
        'Tender Deleted!',
        'View All Tender!',
        'success'
      )
      router.push('/admin/tender/available')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Cannot delete due to dependency issues!',
        text: 'Tender is ongoing!',
        footer: ''
      });
    }
  };


  return (
    <div> <MyLayout title="Tender Details" />
      <SideLayout />
      <div className="flex justify-center items-center bg-gray-50 min-h-screen">
        <div className="bg-white max-w-lg w-full rounded-lg shadow-md p-8">

          <h1 className="text-2xl font-bold text-center">Tender Details</h1>

          <div className="flex justify-between items-center mt-8">
            <h2 className="text-lg font-medium">{data.Tendername}</h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-gray-600 font-medium">Project Location</h3>
              <p className="mt-2">{data.Projectlocation}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Tender Budget</h3>
              <p className="mt-2">{data.Tenderbudget}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Project Start Date</h3>
              <p className="mt-2">{new Date(data.ProjectStartDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Project Completion Date</h3>
              <p className="mt-2">{new Date(data.ProjectCmplttDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Deadline</h3>
              <p className="mt-2">{new Date(data.Deadline).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Completion Percentage</h3>
              <p className="mt-2">{data.Cmpltpercentege}%</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Status</h3>
              <p className="mt-2">{data.Status === 1 ? 'Active' : 'Inactive'}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Tender Manager</h3>
              <p className="mt-2">{tendermanagerName}</p>
            </div>
            <div>
              <h3 className="text-gray-600 font-medium">Agency</h3>
              <p className="mt-2">{agencyName}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id
  const response = await axios.get(`http://localhost:3000/tenders/viewTender/${id}`)
  const data = await response.data
  return { props: { data } }
}
