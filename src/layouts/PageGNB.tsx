import { Link, NavLink } from "react-router";

const NAVIGATION_LIST: { title: string; path: string }[] = [
  { title: "홈", path: "/" },
  { title: "북마크", path: "/bookmark" },
];

export const PageGNB = () => {
  return (
    <header>
      <h1>
        <Link to="/">Netflix</Link>
      </h1>

      <nav>
        <h3 className="visually-hidden">메뉴</h3>

        <ul>
          {NAVIGATION_LIST.map((item) => (
            <li key={item.title}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <form action="">
        <input type="text" placeholder="보고싶은 콘텐츠를 입력하세요" />
        <button type="button">검색</button>
      </form>
    </header>
  );
};
