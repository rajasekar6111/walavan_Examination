import EditQuestions from "../editQuestions";

function updateQuestions({ questions,answers }) {
  console.log("questions,answers", questions,answers);
  return <EditQuestions questionsUpdateData={questions}  answersUpdateData={answers} />;

}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/questions/${params.id}`);
  const res1 = await fetch(`http://localhost:3000/api/answers/${params.id}`);
  const questions = await res.json();
  const answers = await res1.json();
  return {
    props: { questions,answers },
  };
}

export default updateQuestions;
