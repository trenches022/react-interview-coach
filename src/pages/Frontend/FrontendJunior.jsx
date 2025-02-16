import { useState, useEffect } from "react";
import Fuse from "fuse.js"; 
import questionsData from "../../assets/questions.json";

const FrontendJunior = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleChange = (e, id) => {
    setAnswers({ ...answers, [id]: e.target.value });
  };

  const checkAnswers = () => {
    let correctCount = 0;
    let feedbackList = [];

    questions.forEach((q) => {
      const userAnswer = answers[q.id]?.trim().toLowerCase();
      if (!userAnswer) {
        feedbackList.push({ question: q.question, result: "❌ No answer provided." });
        return;
      }

      const fuse = new Fuse(q.answers, { includeScore: true, threshold: 0.3 });

      const result = fuse.search(userAnswer);
      if (result.length > 0) {
        const bestMatch = result[0];
        const similarity = 1 - bestMatch.score;

        if (similarity >= 0.7) {
          correctCount += similarity >= 0.9 ? 1 : 0.5;
          feedbackList.push({
            question: q.question,
            result: similarity >= 0.9 ? "✅ Correct" : "🟡 Partially correct",
          });
        } else {
          feedbackList.push({ question: q.question, result: "❌ Incorrect" });
        }
      } else {
        feedbackList.push({ question: q.question, result: "❌ Incorrect" });
      }
    });

    setScore(correctCount);
    setFeedback(feedbackList);
  };

  return (
    <div className="quiz-container">
      <h1>Frontend Junior Interview Questions</h1>
      {questions.map((q) => (
        <div key={q.id} className="question-card">
          <h3>{q.question}</h3>
          <textarea onChange={(e) => handleChange(e, q.id)} placeholder="Your answer..." />
        </div>
      ))}
      <button onClick={checkAnswers} className="submit-btn">Submit Answers</button>

      {score !== null && (
        <div className="result-section">
          <h2>Your Score: {score.toFixed(1)}/{questions.length}</h2>
          <h3>Feedback:</h3>
          <ul>
            {feedback.map((item, index) => (
              <li key={index}>
                <strong>{item.question}</strong>: {item.result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FrontendJunior;
