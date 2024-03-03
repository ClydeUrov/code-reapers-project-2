function TestingQuestion({ question, setAnsw }) {
  return (
    <div>
      <p>{question.question}</p>
      <form className="grid grid-cols-2 gap-6 mt-6">
        <div>
          <input type="radio" name={`option`} id="option1" />
          <label htmlFor="option1">{question.option1}</label>
        </div>
        <div>
          <input type="radio" name={`option`} id="option2" />
          <label htmlFor="option2">{question.option2}</label>
        </div>
        <div>
          <input type="radio" name={`option`} id="option3" />
          <label htmlFor="option3">{question.option3}</label>
        </div>
        <div>
          <input type="radio" name={`option`} id="option4" />
          <label htmlFor="option4">{question.option4}</label>
        </div>
      </form>
    </div>
  );
}

export default TestingQuestion;
