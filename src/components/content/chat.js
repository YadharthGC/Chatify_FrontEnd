import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../scss/chat.scss";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { handleAdd } from "../../features";
import SendSection from "./send";
import { hostName, socket } from "../../common";

export default function ChatSection() {
  const selector = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [msgs, setMsgs] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    socket.emit("connection", (data) => {
      console.log("socketID: socket.id", data.id);
    });

    console.log(selector?.receiverId);

    handleGetMessages();

    socket.on("newMessage", (newMessage) => {
      console.log("from Socket", newMessage);
      let arr = msgs;
      arr.push(newMessage);
      setMsgs(arr);
    });

    setLoad(false);
  }, [selector?.receiverId, load]);

  const handleGetMessages = async () => {
    try {
      if (!selector?.receiverId) {
        return;
      }
      await axios
        .post(hostName + "chat/messages/getmsgs", {
          senderId: window.localStorage.getItem("mainUserId"),
          receiverId: selector?.receiverId,
        })
        .then((res) => {
          console.log(res.data?.messages);
          setMsgs(res.data?.messages);
          // dispatch(handleAdd(res.data.users));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const obj = [
    {
      type: "receiver",
      msg: "hi",
    },
    {
      type: "user",
      msg: "what",
    },
    {
      type: "receiver",
      msg: "i am from hong kong named Tamashi",
    },
    {
      type: "user",
      msg: "Sorry i thought its a spam",
    },
  ];

  return (
    <>
      <div className="chatSection">
        <div className="chatBox">
          {msgs.map((data) => {
            if (data.senderId === window.localStorage.getItem("mainUserId")) {
              return (
                <div className="chattingDiv sender">
                  <h2>{data.senderId}</h2>
                  <h3>{data.message}</h3>
                </div>
              );
            } else {
              return (
                <div className="chattingDiv receiver">
                  <h2>{data.senderId}</h2>
                  <h3>{data.message}</h3>
                </div>
              );
            }
          })}
        </div>
      </div>
      <SendSection setLoad={setLoad} />
    </>
  );
}
