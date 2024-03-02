function NavLinks({ list = [] }) {
  return (
    <nav>
      <ul className="flex flex-col gap-y-4">
        {list.map((el, i) => (
          <li
            key={i}
            className="styledLi flex gap-x-4 items-center "
            onClick={el.onClick}
          >
            {el.icon} <span>{el.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
