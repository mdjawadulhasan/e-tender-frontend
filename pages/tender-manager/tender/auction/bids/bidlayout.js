export default function BidLayout({ data }) {
  return (
    <>
      <h1>Bid: {data.Bid}</h1>
      <h1>AgencyId: {data.AgencyId}</h1>
      <h1>TenderId: {data.TenderId}</h1>
    </>
  );
}
