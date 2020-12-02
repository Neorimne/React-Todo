import React from "react";
import style from "./users.module.css";
import { useEffect, useState } from "react";
import Preloader from "../common/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, IUser, selectAllUsers } from "../../redux/usersReducer";
import { RootState } from "../../redux/rootReducer";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector((state: RootState) => state.users.status);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (usersStatus === "idle") {
      setIsFetching(true);
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  useEffect(() => {
    if (usersStatus === "succeeded") setIsFetching(false);
  }, [usersStatus]);

  const usersItems = users.map((element: IUser) => (
    <div key={element.id} className={style.userContainer}>
      <div className={style.userImage}>
        <img src={element.avatar} alt="user ava" />
      </div>
      <div className={style.userInfo}>
        <h2>{element.firstName}</h2>
        <h2>{element.lastName}</h2>
        <div className={style.userEmail}>{element.email}</div>
      </div>
    </div>
  ));

  return (
    <div className={style.usersWrapper}>
      {isFetching ? <Preloader /> : usersItems}
    </div>
  );
};

export default Users;
