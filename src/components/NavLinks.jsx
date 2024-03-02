function NavLinks({ list = [] }) {
  return (
    <nav>
      <ul className="flex flex-col gap-y-4">
        {list.map((el, i) => (
          <li
            key={i}
            className="styledLi flex gap-x-4 items-center text-[18px]"
            onClick={el.onClick}
          >
            <span className="text-[30px]">{el.icon}</span> <span>{el.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
