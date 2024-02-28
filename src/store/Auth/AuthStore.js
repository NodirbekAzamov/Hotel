import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useAuthStore = create((set) => ({
    status: "",
    login: async (payload) => {
        try {
            const response = await axiosClient.post("/Admin/login-admin", payload)
            console.log(response);
        } catch (err) {
            console.log(err);
        }

    }
}))

export default useAuthStore;


