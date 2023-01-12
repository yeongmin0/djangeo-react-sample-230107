import create from "zustand";

const useAuth = create((set, get) => {
  // ...

  // 상태관리 객체 반환
  return {
    isAuthenticated: false, // 우리는 따로 다른 스토리지 안 쓰니까 로그인 유지 안 하고.

    login: () => set({ isAuthenticated: true }),

    logout: () => set({ isAuthenticated: false }),
  };
});

export default useAuth;
