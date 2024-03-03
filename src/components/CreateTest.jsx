import { useState } from "react";

function CreateTest() {
  const [formValues, setFormValues] = useState({
    subject: '',
    title: '',
    course: '',
    group: '',
    deadline: ''
  });

  const [questionValue, setQuestionValue] = useState({
    question: '',
    variant1: '',
    variant2: '',
    variant3: '',
    variant4: '',
    rightAnswer: ''
  })

  const [questionsList, setQuestionList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
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
      questionValue.variant1.trim() === '' ||
      questionValue.variant2.trim() === '' ||
      questionValue.variant3.trim() === '' ||
      questionValue.variant4.trim() === ''
    ) {
      // Если какое-то из полей не заполнено, выводим сообщение об ошибке
      alert('Будь ласка, заповніть всі поля питання.');
      return; // Прекращаем выполнение функции, чтобы новый вопрос не добавился
    }

    const newQuestion = {
      number: questionsList.length + 1,
      question: questionValue.question,
      variant1: questionValue.variant1,
      variant2: questionValue.variant2,
      variant3: questionValue.variant3,
      variant4: questionValue.variant4,
      rightAnswer: questionValue.rightAnswer,
    };

    setQuestionList([...questionsList, newQuestion]);

    setQuestionValue({
      question: '',
      variant1: '',
      variant2: '',
      variant3: '',
      variant4: '',
    });
  }

  return (
    <div className="m-10 px-8"> 
      <h1 className='text-4xl w-full text-center my-12'>Створити тестування</h1>
      <form onSubmit={handleSubmit} className="flex gap-5">
        <div className="flex flex-col gap-5 lg:w-[700px]">
          <input
            className="input"
            id="subject"
            type="text"
            placeholder="Предмет тестування"
            value={formValues.subject}
            onChange={handleInputChange}
          />
          <input
            className="input"
            id="title"
            type="text"
            placeholder="Тема тестування"
            value={formValues.title}
            onChange={handleInputChange}
          />
          <div className="flex gap-12">
            <select
              className="input w-1/3"
              id="course"
              placeholder="Курс тестування"
              value={formValues.course}
              onChange={handleInputChange}
            >
              <option value="">Виберіть курс</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
            <select
              className="input w-1/3"
              id="group"
              placeholder="Група тестування"
              value={formValues.group}
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
          </div>
          <input
            className="input"
            id="deadline"
            type="datetime-local"
            placeholder="Дедлайн тесту"
            value={formValues.deadline}
            onChange={handleInputChange}
          />

          <h3 className="text-lg font-semibold mt-5">Створити запитання:</h3>

          <textarea 
            className="input"
            style={{borderRadius: "10px"}}
            id="question"
            placeholder="Питання"
            value={questionValue.question}
            onChange={handleQuestionChange}
          />
          
          <div className="flex gap-12">
            <input 
              className="input"
              id="variant1"
              type="text"
              placeholder="Варіант"
              value={questionValue.variant1}
              onChange={handleQuestionChange}
            />
            <input 
              className="input"
              id="variant2"
              type="text"
              placeholder="Варіант"
              value={questionValue.variant2}
              onChange={handleQuestionChange}
            />
          </div>
          <div className="flex gap-12">
            <input 
              className="input"
              id="variant3"
              type="text"
              placeholder="Варіант"
              value={questionValue.variant3}
              onChange={handleQuestionChange}
            />
            <input 
              className="input"
              id="variant4"
              type="text"
              placeholder="Варіант"
              value={questionValue.variant4}
              onChange={handleQuestionChange}
            />
          </div>
          <div className="flex gap-12">
            Правильна відповідь:
            <select
              className="input !w-80"
              id="rightAnswer"
              placeholder="Група тестування"
              value={questionValue.rightAnswer}
              onChange={handleQuestionChange}
            >
              <option value="1">{questionValue.variant1}</option>
              <option value="2">{questionValue.variant2}</option>
              <option value="3">{questionValue.variant3}</option>
              <option value="4">{questionValue.variant4}</option>
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
        <div className="max-w-[700px] mt-5">
          {questionsList.map((quest, index) => (
            <div key={index} className="my-5 flex gap-3 text-lg">
              <p>{quest.number}.</p>
              <div className="flex flex-col">
                <p className="">{quest.question}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p>1) {quest.variant1}</p>
                    <p>2) {quest.variant2}</p>
                  </div>
                  <div>
                    <p>3) {quest.variant3}</p>
                    <p>4) {quest.variant4}</p>
                  </div>
                </div>
                <p className="my-2">Правильна відповідь: {quest.rightAnswer})</p>
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
