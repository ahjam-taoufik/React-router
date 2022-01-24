import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();

  return <div>user Details {userId}</div>;
};

export default UserDetails;
