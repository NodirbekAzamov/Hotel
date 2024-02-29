import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useRoomStore = create((set)=>({
    rooms: [],
    getRooms: async ()=> {
        const response = await axiosClient.get("/Room/get-all-rooms")
        set({rooms: [...response?.data]})
        console.log(response);
    },
    postRooms: async (payload)=> {
        const response = await axiosClient.post("/Room/add-room", {...payload});
    }
    
}))
export default useRoomStore