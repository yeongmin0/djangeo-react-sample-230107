const BottonInterface = ({ children, className, onClick }) => {
  return (
    <button
      className={`border rounded-md px-2 py-1 duration-150 active:scale-95 ${className}`}
      onClick={(event) => {
        event.preventDefault();
        // 변수 !== null        이거는 딱 null만 걸러냄.          => 우리는 null, undefined 둘 다 걸러내는 걸 좋아함.
        // 변수 !== undefined   이거는 딱 undefined만 걸러냄.     => 우리는 null, undefined 둘 다 걸러내는 걸 좋아함.
        onClick != null && onClick(event);
      }}
    >
      {children}
    </button>
  );
};

export const MainButton = ({ children, className, onClick }) => {
  return (
    <BottonInterface
      className={`bg-main text-main-contra ${className}`}
      onClick={onClick}
    >
      {children}
    </BottonInterface>
  );
};

export const PrimaryButton = ({ children, className, onClick }) => {
  return (
    <BottonInterface
      className={`bg-primary text-primary-contra active:bg-primary-active ${className}`}
      onClick={onClick}
    >
      {children}
    </BottonInterface>
  );
};

export const LinkButton = ({ children, className, onClick }) => {
  return (
    <BottonInterface
      className={`bg-transparent border-none underline text-link active:text-link-active ${className}`}
      onClick={onClick}
    >
      {children}
    </BottonInterface>
  );
};
