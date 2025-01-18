import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../scss/receiverSection.scss";
import ChatSection from "../content/chat";
import SendSection from "../content/send";
import { useDispatch, useSelector } from "react-redux";

export default function ReceiverSection() {
  const searchSelector = useSelector((state) => state.search);
  const [receiverName, setReceiverName] = useState("None");

  // useEffect(() => {}, [searchSelector?.receiverName]);

  return (
    <div className="receiverSection">
      <div className="receiverBox">
        <h3 className="iconHeader">
          <AccountCircleIcon id="accIcon" />
        </h3>
        <h3>
          <div>{searchSelector?.receiverName}</div>
          <div>Receiver Details</div>
        </h3>
      </div>
      <ChatSection />
      {/* <SendSection /> */}
    </div>
  );
}
