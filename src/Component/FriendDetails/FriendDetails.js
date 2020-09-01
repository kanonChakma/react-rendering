import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const FriendDetails = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h1>There is friend {id} Details</h1>
      <h2>name is:{user.name}</h2>
      <h2>Email is:{user.email}</h2>
    </div>
  );
};
export default FriendDetails;
