import { useState } from "react";
import { createTest } from "../helpers/api";
import { errorToast, successToast } from "../helpers/toasters";

function CreateTest() {
  const [formValues, setFormValues] = useState({
    subjectId: '',
    theme: '',
    assignedGroupId: '',
    deadline: ''
  });

  const [questionValue, setQuestionValue] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    correctOption: ''
  })

  const [questionsList, setQuestionList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    formValues.options = questionsList

    try {
      await createTest(formValues);
      successToast()
    } catch (e) {
      errorToast()
    }
    setFormValues({
      subjectId: '',
      theme: '',
      assignedGroupId: '',
      deadline: ''
    })
  }

  const handleInputChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  const handleQuestionChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setQuestionValue({
      ...questionValue,
      [name]: value
    });
  }

  const addQuestion = () => {
    if (
      questionValue.question.trim() === '' ||
      questionValue.option1.trim() === '' ||
      questionValue.option2.trim() === '' ||
      questionValue.option3.trim() === '' ||
      questionValue.option4.trim() === ''
    ) {
      alert('Будь ласка, заповніть всі поля питання.');
      return;
    }

    const newQuestion = {
      question: questionValue.question,
      option1: questionValue.option1,
      option2: questionValue.option2,
      option3: questionValue.option3,
      option4: questionValue.option4,
      correctOption: questionValue.correctOption,
    };

    setQuestionList([...questionsList, newQuestion]);

    setQuestionValue({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
    });
  }

  return (
    <div className="m-10 px-8"> 
      <h1 className='text-4xl w-full text-center my-12'>Створити тестування</h1>
      <form onSubmit={handleSubmit} className="flex gap-5">
        <div className="flex flex-col gap-5 lg:w-[800px]">
          <select
            className="input w-1/3"
            id="subjectId"
            placeholder="Предмет тестування"
            value={formValues.subjectId}
            onChange={handleInputChange}
          >
            <option value="">Виберіть предмет тестування</option>
            <option value="1">History</option>
            <option value="2">Maths</option>
            <option value="3">Python</option>
            <option value="4">Philosophy</option>
          </select>
          <input
            className="input"
            id="theme"
            type="text"
            required
            placeholder="Тема тестування"
            value={formValues.theme}
            onChange={handleInputChange}
          />
          <div className="flex gap-12">
            <select
              className="input w-1/3"
              id="assignedGroupId"
              placeholder="Група тестування"
              value={formValues.assignedGroupId}
              onChange={handleInputChange}
            >
              <option value="">Виберіть групу</option>
              <option value="1">IO-05</option>
              <option value="2">IP-01</option>
              <option value="3">IA-12</option>
              <option value="4">IM-33</option>
              <option value="5">IK-12</option>
              <option value="6">IM-03</option>
              <option value="7">IL-36</option>
              <option value="8">IE-02</option>
            </select>
            <input
              className="input"
              id="deadline"
              type="datetime-local"
              placeholder="Дедлайн тесту"
              value={formValues.deadline}
              onChange={handleInputChange}
            />
          </div>

          <h3 className="text-lg font-semibold mt-5">Створити запитання:</h3>

          <textarea 
            className="input"
            style={{borderRadius: "10px"}}
            id="question"
            maxLength={124}
            placeholder="Питання"
            value={questionValue.question}
            onChange={handleQuestionChange}
          />
          
          <div className="flex gap-12">
            <input 
              className="input"
              id="option1"
              type="text"
              maxLength={36}
              placeholder="Варіант"
              value={questionValue.option1}
              onChange={handleQuestionChange}
            />
            <input 
              className="input"
              id="option2"
              type="text"
              maxLength={36}
              placeholder="Варіант"
              value={questionValue.option2}
              onChange={handleQuestionChange}
            />
          </div>
          <div className="flex gap-12">
            <input 
              className="input"
              id="option3"
              type="text"
              maxLength={36}
              placeholder="Варіант"
              value={questionValue.option3}
              onChange={handleQuestionChange}
            />
            <input 
              className="input"
              id="option4"
              type="text"
              maxLength={36}
              placeholder="Варіант"
              value={questionValue.option4}
              onChange={handleQuestionChange}
            />
          </div>
          <div className="flex gap-12">
            Правильна відповідь:
            <select
              className="input !w-80"
              id="correctOption"
              required
              placeholder=""
              value={questionValue.correctOption}
              onChange={handleQuestionChange}
            >
              <option value="">Виберіть правильну відповідь</option>
              <option value="1">{questionValue.option1}</option>
              <option value="2">{questionValue.option2}</option>
              <option value="3">{questionValue.option3}</option>
              <option value="4">{questionValue.option4}</option>
            </select>
          </div>

          <button
            type="button"
            onClick={() => addQuestion()}
            className="px-4 py-2 border rounded-xl my-2 w-2/5 text-lg hover:bg-slate-200 border-gray-500"
          >
            Додати запитання
          </button>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="button">Зберегти</button>
        </div>
      </form>

      {questionsList ?
        <div className="max-w-[800px] mt-5">
          {questionsList.map((quest, index) => (
            <div key={index} className="my-5 flex gap-3 text-lg">
              <p>{index + 1}.</p>
              <div className="flex flex-col">
                <p className="">{quest.question}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>1) {quest.option1}</p>
                    <p>2) {quest.option2}</p>
                  </div>
                  <div>
                    <p>3) {quest.option3}</p>
                    <p>4) {quest.option4}</p>
                  </div>
                </div>
                <p className="my-2">Правильна відповідь: {quest.correctOption})</p>
              </div>
            </div>
          ))}
        </div>
        : ''
      }
    </div>
  );
}

export default CreateTest;
