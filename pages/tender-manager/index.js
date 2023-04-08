import Link from "next/link"
import MyLayout from "@/pages/tender-manager/component/layout"
export default function AdminDashboard() {

    return (
      <>
      <MyLayout title="Admin DashBoard"/>
      <h1>Tender Manager Dashboard</h1>

    {/* <Link href="/tender-manager/getauctionbids">See All Users</Link>
    <br></br>
    <Link href="/admin/dashboard/findusers">Find Users by ID</Link> */}
      </>
    )
  }