import React, { useState, useEffect } from "react";
import { handleAdd } from "../Reducers/searchReducer";
import axios from "axios";
import { hostName } from "../utilis/commonVariables";
import { useDispatch } from "react-redux";

import { useParams } from "react-router-dom";

export default function ChatDrawer() {
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleGetAllUsers = async () => {
    try {
      //window.localStorage.setItem("mainUserId", res.data.id);
      let mainUserId = window.localStorage.getItem("userId") || params?.id;
      await axios
        .get(hostName + "chat/messages/users", { mainUserId })
        .then((res) => {
          console.log(res.data);
          dispatch(handleAdd(res.data.allUsers));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatDrawerPage">
      <div className="mainUser"></div>
      <div className="contacts"></div>
    </div>
  );
}
