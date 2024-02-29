import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useRoomStore = create((set)=>({
    rooms: [],
    roomStatus: [],
    getRooms: async ()=> {
        const response = await axiosClient.get("/Room/get-all-rooms")
        set({rooms: [...response?.data]})
        console.log(response);
    },
    getRoomStatus: async ()=> {
        const response = await axiosClient.get("/RoomStatus/get-all-rooms")
        set({roomStatus: [...response?.data]})
        console.log(response);
    },
}))
export default useRoomStore