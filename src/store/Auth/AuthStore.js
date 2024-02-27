import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useAuthStore = create((set) => ({
    status: "",
    login: async () => {
        const response = await axiosClient.post("")
    }
}))




