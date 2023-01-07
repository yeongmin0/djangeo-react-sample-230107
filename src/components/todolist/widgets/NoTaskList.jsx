import { GiSandsOfTime } from "react-icons/gi";

const NoTaskList = () => {
  return (
    // SVG -> text-, fill-, ...
    <div className="flex flex-col justify-center items-center p-4 text-dark">
      <GiSandsOfTime className="w-1/4 h-full" />
    </div>
  );
};

export default NoTaskList;
