import { useEffect, useState } from "react";

function PassTest() {
  // const [tests, setTests] = useState([]);

  const tests = [
    {
      subject: "Математика",
      theme: "Алгебра",
      eval: '',
      deadline: "2024-04-10",
    },
    {
      subject: "Физика",
      theme: "Механіка",
      eval: '',
      deadline: "2024-04-15",
    },
    {
      subject: "Хімія",
      theme: "Органічна хімія",
      eval: '',
      deadline: "2024-04-20",
    },
    {
      subject: "Физика",
      theme: "Механіка",
      eval: '90',
      deadline: "2024-03-01",
    },
    {
      subject: "Хімія",
      theme: "Органічна хімія",
      eval: '80',
      deadline: "2024-02-20",
    },
    {
      subject: "Математика",
      theme: "Алгебра",
      eval: '50',
      deadline: "2024-01-10",
    },
  ];

  const currentDate = new Date();

  const currentTests = tests.filter(test => new Date(test.deadline) >= currentDate);
  const overdueTests = tests.filter(test => new Date(test.deadline) < currentDate);

  // useEffect(() => {

  // }, [])

  return (
    <div className="m-12">
      <h2 className="text-4xl w-full text-center my-12">Актуальні тестування</h2>
      <table className="min-w-full divide-y divide-gray-200 text-lg">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="table_title"
            >
              Предмет
            </th>
            <th
              scope="col"
              className="table_title"
            >
              Тема
            </th>
            <th
              scope="col"
              className="table_title"
            >
              Дедлайн
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentTests.map((test, index) => (
            <tr
              key={index}
              onClick={() => {
                // setSelected(student);
                // setIsModalOpen(true);
              }}
              className="cursor-pointer hover:bg-gray-200"
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.subject}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.theme}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.deadline}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-4xl w-full text-center my-12">Завершенні тестування</h2>
      <table className="min-w-full divide-y divide-gray-200 text-lg">
        <thead className="bg-gray-50">
          <tr> 
            <th scope="col"className="table_title" >Предмет</th>
            <th scope="col" className="table_title">Тема</th>
            <th scope="col" className="table_title" >Бал</th>
            <th scope="col" className="table_title" >Дедлайн</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {overdueTests.map((test, index) => (
            <tr key={index} >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.subject}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.theme}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.eval}%</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.deadline}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default PassTest;
