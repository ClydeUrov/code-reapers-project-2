import { useState } from 'react'

const ModalStudentCard = ({student, onClose}) => {
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [faculty, setFaculty] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // В этом месте вы можете выполнить дополнительные действия, такие как отправка данных на сервер
    // await updateStudent();
    onClose();
  }

  return (
    <div className='text-center flex flex-col gap-10'>
      <h2 className='text-4xl'>Картка Студента</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <input
              type="text"
              value={lastName}
              className="input"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Прізвище"
            />
          </div>
          <div>
            <input
              type="text"
              value={faculty}
              className="input"
              onChange={(e) => setFaculty(e.target.value)}
              placeholder="Факультет"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              className="input"
              disabled
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
          </div>
          <div>
            <input
              type="text"
              value={firstName}
              className="input"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ім'я"
            />
          </div>
          <div>
            <input
              type="number"
              value={course}
              className="input"
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Курс"
            />
          </div>
          <div>
            <input
              type="tel"
              value={phone}
              className="input"
              disabled
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Телефон"
            />
          </div>
          <div>
            <input
              type="text"
              value={middleName}
              className="input"
              onChange={(e) => setMiddleName(e.target.value)}
              placeholder="По-батькові"
            />
          </div>
          <div>
            <input
              type="text"
              value={group}
              className="input"
              onChange={(e) => setGroup(e.target.value)}
              placeholder="Група"
            />
          </div>
        </div>
        <button
          type="submit"
          className='button mr-20 ml-auto w-full'
        >
          Зберегти
        </button>
      </form>

      <div>
        <p>Оцінка та аналіз академічної успішності: {}</p>
        <p>Оцінка та аналіз відвідуваності: {}</p>
      </div>
    </div>
  )
}

export default ModalStudentCard;