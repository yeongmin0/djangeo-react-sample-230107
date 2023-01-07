import React, { useContext, useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    //
    <div className="min-h-screen flex flex-col justify-center items-center">
      <form
        className="my-form-card"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1 className="uppercase font-bold text-2xl">Login</h1>
        <fieldset className="w-full grid grid-cols-3 gap-4">
          <span className="">ID</span>
          <input
            className="col-span-2 border px-2 py-1 outline-black peer"
            name="username"
            placeholder="계정"
            autoComplete="username" // "on"
            // HTML value => defaultValue
            // React value + onChange = 일반적인 조합(useState 등 활용)
            value={username}
            // HTML => oninput
            onChange={(event) => {
              setUsername(event.target.value);
              console.log(
                "event.target.validity.valid",
                event.target.validity.valid
              );
            }}
            required
            pattern="^[a-zA-Z0-9]{3,}$"
          />
          <span className="col-start-2 col-span-2 text-red-600 hidden peer-invalid:block">
            아이디는 세 글자 이상 입력해 주십시오.
          </span>
        </fieldset>
        <fieldset className="w-full grid grid-cols-3 gap-4">
          <span className="">PW</span>
          <input
            className="col-span-2 border px-2 py-1 outline-black peer"
            type="password"
            name="password"
            placeholder="비밀번호"
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            pattern="^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$"
          />
          <span className="col-start-2 col-span-2 text-red-600 hidden peer-invalid:block">
            비밀번호는 8 글자 이상 입력해 주십시오.
          </span>
        </fieldset>
        <div className="flex flex-col md:flex-row justify-end gap-4 md:gap-8">
          <button
            className="uppercase border rounded-md font-bold text-lg px-2 py-1 duration-150 active:scale-95"
            onClick={(event) => {
              event.preventDefault();
              // 아직 인증을 수행하지 않음.
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
