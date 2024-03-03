import { useEffect, useState } from "react";
import { errorToast } from "../helpers/toasters";
import { getAllMessaages } from "../helpers/api";
import Modal from "./Modal";
import MessagesModal from "./MessagesModal";

function Messages() {
  const [data, setData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        getAllMessaages().then((d) => {
          setData(
            d
              .slice()
              .sort(
                (a, b) =>
                  new Date(b.sendTime).getTime() -
                  new Date(a.sendTime).getTime()
              )
          );
        });
      } catch (error) {
        console.log(error);
        errorToast(error.messages);
      }
    }
    fetch();
  }, []);

  if (!data.length) return <h1>Loading...</h1>;
  return (
    <div className="px-8 py-10">
      <h2 className="font-semibold text-2xl">Ваші повідомлення</h2>
      <table class="table-auto w-full mt-4">
        <thead className="border-b">
          <tr className="">
            <td className="px-4 py-2">Від кого</td>
            <td className="px-4 py-2">Тема</td>
            <td className="px-4 py-2">Тип</td>
            <td className="px-4 py-2">Дата</td>
          </tr>
        </thead>
        <tbody className="  ">
          {data.length
            ? data.map((el) => {
                return (
                  <tr
                    key={el.id}
                    className="even:bg-gray-300 odd:bg-gray-100 even:hover:bg-gray-400 odd:hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      setSelected(el);
                      setModalOpen(true);
                    }}
                  >
                    <td className="px-4 py-2">{el.senderEmail}</td>
                    <td className="px-4 py-2">{el.title}</td>
                    <td className="px-4 py-2">{el.messageType}</td>
                    <td className="px-4 py-2">{el.sendTime.split("T")[0]}</td>
                  </tr>
                );
              })
            : ""}
          {modalOpen && selected && (
            <Modal
              title="Повідомлення"
              onCloseModal={() => setModalOpen(false)}
            >
              <MessagesModal data={selected} />
            </Modal>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Messages;
