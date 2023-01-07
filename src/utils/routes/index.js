const Path = {
  HOME: "/",
  TODOLIST: "/todo",
  LOGIN: "/login",
  UI: "/ui",
  ERROR404: "/404",
};

Object.freeze(Path); // 변경 방지(한 뎁스까지만)

export default Path; // 다른 곳에서 import 할 수 있게. <- export // default: 이 파일을 대표하는 것 하나.
