import { useRouter } from 'next/router'
import axios from 'axios'

export default function ViewTender({ data }) {
  const router = useRouter()

  const tendermanagerName = data.Tendermanager?.name || 'Not assigned yet'
  const agencyName = data.Agency?.AgencyName || 'Not assigned yet'

  return (
    <div>
      <h1 className="text-2xl font-bold">Tender Details</h1>

      <div className="flex justify-between items-center mt-8">
        <h2 className="text-lg font-medium">{data.Tendername}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push(`/tenders/edit/${data.id}`)}
        >
          Edit
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
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id
  const response = await axios.get(`http://localhost:3000/tenders/viewTender/${id}`)
  const data = await response.data
  return { props: { data } }
}
