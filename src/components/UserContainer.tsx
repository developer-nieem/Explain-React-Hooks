import { useEffect, useState } from "react";
import UserRender from "./UserRender";
import useUserData from "../hooks/useUserData";

const UserContainer = () => {

  const {data , loading , error} = useUserData()


    return (
        <div>
            <UserRender data={data}  loading={loading} error={error}  />
        </div>
    );
};

export default UserContainer;