import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "../../scss/contact.scss";
import { useDispatch, useSelector } from "react-redux";
import { hostName } from "../../common";
import axios from "axios";
import { handleAdd, handleReceiver } from "../../features";

export default function ContactSection() {
  const searchSelector = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const arr = [1, 2, 3, 4, 5];

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  const handleGetAllUsers = async () => {
    try {
      //window.localStorage.setItem("mainUserId", res.data.id);
      let mainUserId = window.localStorage.getItem("mainUserId");
      await axios
        .get(hostName + "chat/messages/users", { mainUser: mainUserId })
        .then((res) => {
          console.log(res.data);
          dispatch(handleAdd(res.data.allUsers));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const handlerSelectUser = () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  const handleSetReceiver = (data) => {
    try {
      console.log(data);
      dispatch(handleReceiver({ id: data._id, name: data.fullName }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contactSection">
      {searchSelector?.users?.length &&
        searchSelector?.users?.map((data, index) => {
          return (
            <div
              className="contactList"
              key={index}
              onClick={() => {
                handleSetReceiver(data);
              }}
            >
              <h3 className="iconHeader">
                <AccountCircleIcon id="accIcon" />
              </h3>
              <h3>
                <div>{data.fullName}</div>
                <div>Chat last Mesage</div>
              </h3>
            </div>
          );
        })}
    </div>
  );
}
