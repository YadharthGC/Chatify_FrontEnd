import socketIO from "socket.io-client";
import io from "socket.io-client";

export const hostName = "http://localhost:3002/";
export const socket = io(hostName, {
  query: {
    userid: window.localStorage.getItem("mainUserId"),
  },
});
