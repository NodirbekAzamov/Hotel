import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useRoomStore = create((set)=>({
    rooms: [],
    getRooms: async ()=> {
        const response = await axiosClient.get("/Guest/get-all-guests")
        set({rooms: [...response?.data]})
        console.log(response);
    },
    
}))
export default useRoomStore