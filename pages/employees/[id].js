import EditEmployees from "../editEmployees";

function updateEmployees({ employees }) {
  console.log("employees", employees);
  return <EditEmployees employeesUpdateData={employees} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/employees/${params.id}`);
  const employees = await res.json();

  return {
    props: { employees },
  };
}

export default updateEmployees;
