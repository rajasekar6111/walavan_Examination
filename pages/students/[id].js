import EditStudents from "../editStudents";

function updateStudents({ students }) {
  console.log("user", students);
  return <EditStudents studentsUpdateData={students} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/students/${params.id}`);
  const students = await res.json();

  return {
    props: { students },
  };
}

export default updateStudents;
