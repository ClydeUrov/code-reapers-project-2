function MessagesModal({ data }) {
  return (
    <section className="space-y-4 py-6">
      <div className="w-full flex items-center">
        <span className="w-1/4 text-lg text-gray-500">Дата: </span>
        <span>{data.sendTime.split("T")[0]}</span>
      </div>
      <div className="w-full flex items-center">
        <span className="w-1/4 text-lg text-gray-500">Відправник: </span>
        <span>{data.senderEmail}</span>
      </div>
      <div className="w-full flex items-center">
        <span className="w-1/4 text-lg text-gray-500">Тема: </span>
        <span>{data.title}</span>
      </div>
      <div className="w-full flex items-center">
        <span className="w-1/4 text-lg text-gray-500">Текст: </span>
        <span className="text-base overflow-y-auto w-full input1">
          {data.body}
        </span>
      </div>
    </section>
  );
}

export default MessagesModal;
