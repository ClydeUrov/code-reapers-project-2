import { useState } from 'react'
import { updateStudent } from '../helpers/api';
import { successToast } from '../helpers/toasters';

const ModalStudentCard = ({student, onClose}) => {
  const [lastName, setLastName] = useState(student.lastName || '');
  const [middleName, setMiddleName] = useState(student.middleName || '');
  const [faculty, setFaculty] = useState(student.faculty || '');
  const [email, setEmail] = useState(student.email || '');
  const [firstName, setFirstName] = useState(student.firstName || '');
  const [course, setCourse] = useState(student.course || '');
  const [phone, setPhone] = useState('');
  const [group, setGroup] = useState(student.groupCipher || '');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      firstName: firstName,
      lastName: lastName,
      middleName: middleName
    }
    
    try {
      await updateStudent({id:student.id, data:data});
      successToast();
      onClose();
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='text-center flex flex-col gap-10'>
      <h2 className='text-4xl'>Картка Студента</h2>
      <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
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
          className='button  ml-auto w-full'
        >
          Зберегти
        </button>
      </form>
      {error && <p>error</p>}
      <div>
        <p>Оцінка та аналіз академічної успішності: {}</p>
        <p>Оцінка та аналіз відвідуваності: {}</p>
      </div>
    </div>
  )
}

export default ModalStudentCard;