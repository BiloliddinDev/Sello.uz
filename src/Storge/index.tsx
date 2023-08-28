import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface langtype {
  name: "";
  setName: (value: "") => void;
}

export const useUser = create<langtype>()(
  persist(
    (set) => ({
      name: "",
      setName: (name: "") => set(() => ({ name: name })),
    }),
    {
      name: "Auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
