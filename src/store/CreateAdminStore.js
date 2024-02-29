import { create } from "zustand";
import axiosClient from "../plugins/axiosClient";

const CreateAdminStore = create((set) => ({
    createAdmin: async (payload) => {
        try {
            const response = await axiosClient.post("/Admin/create-admin", {...payload})
            if(response?.data?.token){
            }
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }
}))

export default CreateAdminStore;


