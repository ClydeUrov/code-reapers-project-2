import { useParams } from "react-router-dom";
import TestingQuestion from "../components/TestingQuestion";

function TestingPage() {
  const { id } = useParams();
  return (
    <article className="px-20 py-24">
      <h1 className="text-center font-semibold text-2xl ">Тестування</h1>

      <table className="table-auto w-full mt-12 ">
        <thead>
          <tr className="[&>*]:text-gray-700 [&>*]:font-normal">
            <td class="px-4 py-2">Предмет</td>
            <td class="px-4 py-2">Тема</td>
            <td class="px-4 py-2">Дедлайн</td>
          </tr>
        </thead>
        <tbody className="bg-stone-200 [&>*]:text-lg [&>*]:font-medium">
          <tr className="">
            <td class="px-4 py-2">Lorem ipsum</td>
            <td class="px-4 py-2">Casdiorng fahasdngh asdksasd treiv sdf.</td>
            <td class="px-4 py-2">13.13.1313</td>
          </tr>
        </tbody>
      </table>

      <ul className="mt-12 space-y-4">
        <li className="flex gap-6 border px-6 py-4 border-gray-500 rounded-lg">
          <span className="font-bold text-2xl">1.</span>
          <TestingQuestion />
        </li>
        <li className="flex gap-6 border px-6 py-4 border-gray-500 rounded-lg">
          <span className="font-bold text-2xl">1.</span>
          <TestingQuestion />
        </li>
        <li className="flex gap-6 border px-6 py-4 border-gray-500 rounded-lg">
          <span className="font-bold text-2xl">1.</span>
          <TestingQuestion />
        </li>
        <li className="flex gap-6 border px-6 py-4 border-gray-500 rounded-lg">
          <span className="font-bold text-2xl">1.</span>
          <TestingQuestion />
        </li>
      </ul>
      <div className="flex-center w-full mt-12">
        <button className="button1">Завершити</button>
      </div>
    </article>
  );
}

export default TestingPage;
