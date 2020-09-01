import React from "react";
import { Link, useHistory } from "react-router-dom";
const Friends = (props) => {
  const { name, email, id } = props.user;
  const userStyle = {
    border: "1px solid gray",
    margin: "10px",
    padding: "10px"
  };
  let History=useHistory();
  const handleClick=(id)=>{
    const url=`/friend/${id}`
         History.push(url);
  }
  return (
    <div style={userStyle}>
      <h3>name is:{name}</h3>
      <h3>email is:{email}</h3>
      <h3>Id is:{id}</h3>
      {/* <Link to={`/friend/${id}`}> 
          <button>Click Brother</button>
      </Link> */}
       <button onClick={()=>handleClick(id)}>Click Brother</button>
    </div>
  );
};
export default Friends;
