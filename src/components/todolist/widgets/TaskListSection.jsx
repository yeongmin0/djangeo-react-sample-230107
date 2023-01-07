import React from "react";
import NoTaskList from "./NoTaskList";

const TaskListSection = (props) => {
  // 구조 분해 할당
  const { bigTitle, taskList, setTaskList } = props;

  return (
    <section className="border rounded-md shadow-md p-8">
      <h1 className="text-2xl font-bold">{bigTitle}</h1>
      {taskList.length === 0 && <NoTaskList />}
      <ul className="flex flex-col py-4">
        {taskList.map((item, index, array) => (
          <li
            className={`py-2 px-4 duration-300 hover:scale-105 ${
              index % 2 == 0 ? "bg-slate-200" : "bg-slate-300"
            }`}
          >
            <div className="cursor-default grid grid-cols-6">
              <span className="">{index + 1}</span>
              <span className="col-span-3">{item.title}</span>
              <span className="col-span-2">{item.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskListSection;
