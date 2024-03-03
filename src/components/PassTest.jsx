import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTests } from "../helpers/api";

function PassTest() {
  const [tests, setTests] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const tests = await getAllTests();
        setTests(tests);
      } catch (error) {
        console.error("Помилка:", error);
      }
    };

    fetchTests();
  }, []);

  const currentDate = new Date();

  const themeMap = new Map();
  const overdueThemes = new Set();

  const currentTests = [];
  const overdueTests = [];

  tests.forEach((test) => {
    if (new Date(test.deadline) >= currentDate) {
      if (test.score && !overdueThemes.has(test.theme)) {
        overdueTests.push(test);
        overdueThemes.add(test.theme);
      } else {
        if (!themeMap.has(test.theme)) {
          themeMap.set(test.theme, true);
          currentTests.push(test);
        }
      }
    }
  });

  return (
    <div className="m-12">
      <h2 className="text-4xl w-full text-center my-12">
        Актуальні тестування
      </h2>
      <table className="min-w-full divide-y divide-gray-200 text-lg">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="table_title">
              Предмет
            </th>
            <th scope="col" className="table_title">
              Тема
            </th>
            <th scope="col" className="table_title">
              Дедлайн
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentTests.map((test, index) => (
            <tr
              key={index}
              onClick={() => {
                navigation(`/test/${test.id}`);
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

      <h2 className="text-4xl w-full text-center my-12">
        Завершенні тестування
      </h2>
      <table className="min-w-full divide-y divide-gray-200 text-lg">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="table_title">
              Предмет
            </th>
            <th scope="col" className="table_title">
              Тема
            </th>
            <th scope="col" className="table_title">
              Бал
            </th>
            <th scope="col" className="table_title">
              Дедлайн
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {overdueTests.map((test, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.subject}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.theme}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.score}%</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{test.deadline}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PassTest;
