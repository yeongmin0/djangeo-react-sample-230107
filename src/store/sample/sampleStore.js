import create from "zustand";

// zustand <- recoil, redux, redux-toolkit, ...
const useSampleStore = create((set, get) => {
  // ...

  // 상태관리 객체 반환
  return {
    // 상태관리할 변수들 작성. 초깃값 부여. (const [age, setAge] = useState(20); )
    age: 20,

    setAge: (newAge) => {
      set({ age: newAge });
    }, // setAge(21);

    increaseAge: () => {
      const state = get();
      const { age } = state; // 구조분해할당
      set({ age: age + 1 });
    },
  };
});

export default useSampleStore;
