import { useState } from "react";
import TaskListSection from "./widgets/TaskListSection";

const TodoListPage = () => {
  const [todoList, setTodoList] = useState([
    {
      title: "밥 먹기",
      content: "밥을 야무지게 먹습니다.",
      name: "정준하",
    },
    {
      title: "밥 하기",
      content: "밥을 맛있게 합니다.",
      name: "강영민",
    },
    {
      title: "자신의 잘생김에 취하기",
      content: "역시 저는 너무 잘생겼어요.",
      name: "강영민",
    },
  ]);
  const [doingList, setDoingList] = useState([
    {
      title: "사진 찍는 중",
      content: "노량진수산....",
      name: "강영민",
    },
  ]);
  const [doneList, setDoneList] = useState([]);

  return (
    <div className="flex flex-col gap-8 px-8 py-16">
      <h1 className="uppercase text-4xl font-bold">Todo List</h1>
      <main className="grid grid-cols-3 gap-8">
        {/* 컴포넌트 재사용 */}
        <TaskListSection
          // Properties
          // Attributes
          // 속성
          // Key-Value
          // name-value
          bigTitle="Todo"
          taskList={todoList}
          setTaskList={setTodoList}
        />
        <TaskListSection
          bigTitle="Doing"
          taskList={doingList}
          setTaskList={setDoingList}
        />
        <TaskListSection
          bigTitle="Done"
          taskList={doneList}
          setTaskList={setDoneList}
        />
      </main>
    </div>
  );
};

export default TodoListPage;
