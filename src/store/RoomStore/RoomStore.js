import { create } from "zustand";
import axiosClient from "../../plugins/axiosClient";

const useRoomStore = create((set) => ({
    rooms: [],
    roomStatus: [],
    getRooms: async () => {
        const response = await axiosClient.get("/Room/get-all-rooms")
        set({ rooms: [...response?.data] })
        console.log(response, "rooms");
    },

    postRooms: async (payload) => {
        const response = await axiosClient.post("/Room/add-room", { ...payload });
    },

    getRoomStatus: async () => {
        const response = await axiosClient.get("/RoomType/get-all-roomtype")
        set({ roomStatus: [...response?.data] })
        console.log(response, "RoomStatus");
    },

}))
export default useRoomStore