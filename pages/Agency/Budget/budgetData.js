export default function BudgetLayout({ data }) {
  return (
    <>
      <h1>id: {data.id}</h1>
      <h1>Amount: {data.Amount}</h1>
      <h1>Status: {data.Status}</h1>
      <h1>Created_at: {data.Created_at}</h1>
      <h1>Updated_at: {data.Updated_at}</h1>
      <h1>Cause: {data.Cause}</h1>
    </>
  );
}
