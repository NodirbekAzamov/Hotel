import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useAuthStore = create((set) => ({
    status: "",
    login: async (payload) => {
        try {
            const response = await axiosClient.post("/Auth/login", {...payload})

            if(response?.data?.token){
                localStorage.setItem("token", response?.data?.token)
            }
            set({status: response?.status})
        } catch (err) {
            console.log(err);
        }
    }
}))

export default useAuthStore;


