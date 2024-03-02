import { useEffect, useState } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoFilterSharp } from "react-icons/io5";
import { getAllStudents } from "../helpers/api";
import { errorToast } from "../helpers/toasters";
import toast from "react-hot-toast";

function convertFromRoman(str) {
  if (str === "I") return 1;
  if (str === "II") return 2;
  if (str === "III") return 3;
  if (str === "IV") return 4;
  if (str === "V") return 5;
}

const StudentTable = ({}) => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [sortedStudents, setSortedStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      getAllStudents()
        .then((data) => {
          setStudents(() =>
            data.map((el) => ({ ...el, course: convertFromRoman(el.course) }))
          );
        })
        .catch((err) => errorToast("Ой, щось пішло не так 🤦‍♂️ 🙇‍♂️"));
    }

    fetchStudents();
  }, []);

  useEffect(() => {
    setSortedStudents(students);
  }, [students]);

  useEffect(() => {
    setSortedStudents((stdnts) => {
      if (searchTerm === "") return students;
      return stdnts.filter((el) => el.middleName.startsWith(searchTerm));
    });
  }, [searchTerm, students]);

  useEffect(() => {
    setSearchTerm("");
    if (sortOption === "A-Z")
      setSortedStudents(() =>
        students
          .slice()
          .sort((a, b) =>
            a.middleName > b.middleName
              ? 1
              : a.middleName < b.middleName
              ? -1
              : 0
          )
      );
    if (sortOption === "Z-A")
      setSortedStudents(() =>
        students
          .slice()
          .sort((a, b) =>
            b.middleName > a.middleName
              ? 1
              : b.middleName < a.middleName
              ? -1
              : 0
          )
      );
    if (sortOption === "1-5")
      setSortedStudents(() =>
        students.slice().sort((a, b) => a.course - b.course)
      );
    if (sortOption === "5-1")
      setSortedStudents(() =>
        students.slice().sort((a, b) => b.course - a.course)
      );
  }, [sortOption, students]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="overflow-x-auto mx-12">
      <h1 className="w-full text-center align-middle mt-6 mb-14 text-3xl">
        Студенти Університету
      </h1>
      <div className="my-7">
        <div className="flex items-center space-x-2">
          <PiMagnifyingGlassBold className="text-gray-500 text-2xl mr-2" />
          <input
            className="rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-2">
          <IoFilterSharp className="text-gray-500 text-2xl mr-2" />
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="border border-gray-300 px-4 py-2 rounded-full"
          >
            <option value="">ФІЛТЕР</option>
            <option value="A-Z">За алфавітом А</option>
            <option value="Z-A">За алфавітом Я</option>
            <option value="1-5">За курсом 1</option>
            <option value="5-1">За курсом 5</option>
          </select>
        </div>
      </div>
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-gray-50 text-lg">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ПІБ
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Факультет
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Курс
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Группа
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedStudents.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{student.id}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {student.middleName +
                    " " +
                    student.firstName +
                    " " +
                    student.lastName}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{student.faculty}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{student.course}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{student.group}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
