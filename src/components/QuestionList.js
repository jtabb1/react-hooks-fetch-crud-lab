import React, { useEffect } from "react";

function QuestionList({ setQuestions, questions }) {

  useEffect(() => {
    console.log("useEffect");
    fetch("http://localhost:4000/questions")
      .then( (r) => r.json())
      .then( (data) => {
        console.log("setState");
        console.log(data);
        setQuestions(data);
      });
  }, []);

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map( q => {
        return <li key={q.id}>{q.prompt}</li>
      })}</ul>
    </section>
  );
}

export default QuestionList;
