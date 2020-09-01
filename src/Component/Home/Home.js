import React, { useState, useEffect } from "react";
import ConditionRendering from "../ConditionRendering/ConditionRendering";
import Friends from "../Friends/Friends";
const Home = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const stylebro = {
    width: "50%",
    border: "1px solid red",
    height: "auto",
    margin: "10px"
  };
  return (
    <div className="main-div" style={{ display: "flex" }}>
      <div className="user-info" style={stylebro}>
        <h2>user length is:{user.length}</h2>
        {user.map((info) => (
          <Friends user={info}></Friends>
        ))}
      </div>
      <div className="condition" style={stylebro}>
        <h1>Conditional rendering</h1>
        <ConditionRendering></ConditionRendering>
      </div>
    </div>
  );
};
export default Home;
