import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../scss/send.scss";
import SendIcon from "@mui/icons-material/Send";
import { hostName } from "../../common";
import axios from "axios";
import { useSelector } from "react-redux";

export default function SendSection(props) {
  const [message, setMessage] = useState("");
  const searchSelector = useSelector((state) => state.search);
  const handleSend = async () => {
    try {
      await axios
        .post(hostName + "chat/messages/send", {
          senderId: window.localStorage.getItem("mainUserId"),
          receiverId: searchSelector.receiverId,
          message: message,
        })
        .then((res) => {
          console.log(res.data);
          props.setLoad(true);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sendSection">
      <input
        type="text"
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <h3>
        <SendIcon
          onClick={() => {
            handleSend();
          }}
        />
      </h3>
    </div>
  );
}
