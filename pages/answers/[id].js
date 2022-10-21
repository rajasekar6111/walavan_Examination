import EditAnswers from "../editAnswers";

function updateAnswers({ answers }) {
  console.log("answers", answers);
  return <EditAnswers answersUpdateData={answers} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/answers/${params.id}`);
  const answers = await res.json();

  return {
    props: { answers },
  };
}

export default updateAnswers;