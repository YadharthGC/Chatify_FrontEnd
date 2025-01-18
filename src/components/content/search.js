import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../../scss/search.scss";
import axios from "axios";
import { hostName } from "../../common";
import { useDispatch } from "react-redux";
import { handleAdd } from "../../features";

export default function SearchSection() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  const handleSearch = async () => {
    try {
      await axios
        .post(hostName + "chat/searchUser", {
          searchUser: name,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(handleAdd(res.data.users));
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="searchSection">
      <h3>
        <SearchIcon
          onClick={() => {
            handleSearch();
          }}
        />
      </h3>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}
