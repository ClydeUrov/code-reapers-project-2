import { useState } from "react";
import { errorToast } from "../../helpers/toasters";
import {
  postMessageCourse,
  postMessageFacult,
  postMessageGroup,
} from "../../helpers/api";

function FormDistribution({ optionList, type, onCloseModal }) {
  const [option, setOption] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const body = {
      title: title,
      body: message,
    };

    try {
      if (type === "Факультети") {
        await postMessageFacult(option, body).then((e) => onCloseModal());
      } else if (type === "Курси") {
        await postMessageCourse(option, body).then((e) => onCloseModal());
      } else if (type === "Групи") {
        await postMessageGroup(option, body).then((e) => onCloseModal());
      }
    } catch (error) {
      console.log(error);
      errorToast(error.message);
    }
  }
  return (
    <form className="flex flex-col pt-6 text-base" onSubmit={handleSubmit}>
      <select
        className="input w-2/6"
        value={option}
        onChange={(e) => setOption(e.target.value)}
        required
      >
        <option value="">{type}</option>
        {optionList.map((el, i) => (
          <option key={i} value={el.id}>
            {el.name}
          </option>
        ))}
      </select>

      <div className="flex-start gap-4 py-4 flex-col [&>*]:w-4/5">
        <input
          type="text"
          className="input"
          placeholder="Тема"
          maxLength={60}
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          maxLength={240}
          className="input min-h-36"
          placeholder="Текст розсилки"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="button1">
        Надіслати
      </button>
    </form>
  );
}

export default FormDistribution;
