import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useAuthStore = create((set) => ({
    login: async (payload) => {
        try {
            const response = await axiosClient.post("/Admin/login-admin", {...payload})
            if(response?.data?.token){
                sessionStorage.setItem("token", response?.data?.token)
                sessionStorage.setItem("status", response?.status)
            }
        } catch (err) {
            console.log(err);
        }
    }
}))

export default useAuthStore;


