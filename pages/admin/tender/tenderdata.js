export default function TenderLayout({ data }) {
  return (
    <>
      <h1>Tendername: {data.Tendername}</h1>
      <h1>Projectlocation: {data.Projectlocation}</h1>
      <h1>Tenderbudget: {data.Tenderbudget}</h1>
      <h1>Tenderbudget: {data.Tenderbudget}</h1>
      <h1>ProjectStartDate: {data.ProjectStartDate}</h1>
      <h1>ProjectCmplttDate: {data.ProjectCmplttDate}</h1>
      <h1>Deadline: {data.Deadline}</h1>
      <h1>Cmpltpercentege: {data.Cmpltpercentege}</h1>
      <h1>TendermanagerId: {data.TendermanagerId}</h1>
      <h1>AgencyId: {data.AgencyId}</h1>
      <h1>Status: {data.Status}</h1>
    </>
  );
}
