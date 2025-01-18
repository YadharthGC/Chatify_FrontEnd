import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import "../../scss/userSection.scss";
import ContactSection from "../content/contact";
import SearchSection from "../content/search";
// import { socket } from "../../common";
import io from "socket.io-client";
import { hostName } from "../../common";

export default function UserSection() {
  useEffect(() => {
    try {
      console.log("userJS");

      // socket.emit("newJoin", { socketID: socket.id });
      // socket.on("newJoinResponse", (data) => console.log(data));
    } catch (err) {
      console.log("err");
    }
  }, []);

  return (
    <div className="userSection">
      <div className="userBox">
        <div className="accountCircleTag">
          <AccountCircleIcon />
        </div>
        {/* <div className="extraIcons">
          <h3>
            <PersonAddIcon />
          </h3>
          <h3>
            <GroupAddIcon />
          </h3>
          <h3>
            <AddCircleOutlineIcon />
          </h3>
          <h3>
            <BedtimeIcon />
          </h3>
        </div> */}
      </div>
      {/* <SearchSection /> */}
      <ContactSection />
    </div>
  );
}
