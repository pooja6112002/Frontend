import { io } from "socket.io-client";

// Backend ka address
const socket = io("http://localhost:5000");

export default socket;