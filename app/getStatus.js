export const getStatus = async () => {
  // Backend:
  const backend_res = await fetch(
    "https://pommesmitketchup.com/api/serverstatus/backendcheck"
  );
  const backend_data = await backend_data.json();

  return {
    probs: { status: data },
  };
};

const Status = ({ status }) => {
  return (
    <div>
      <h1>STATUS</h1>
      {status}
    </div>
  );
};
