import React from "react";
import { Link } from "react-router-dom";
const Friends = (props) => {
  const { name, email, id } = props.user;
  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px"
  };
  return (
    <div style={userStyle}>
      <h3>name is:{name}</h3>
      <h3>email is:{email}</h3>
      <h3>Id is:{id}</h3>
      <Link to={`/friend/${id}`}> this friend id is: {id}</Link>
    </div>
  );
};
export default Friends;
