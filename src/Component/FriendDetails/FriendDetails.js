import React from "react";
import { useParams}from "react-router-dom";
const FriendDetails = (props)=>{
  const{id}=useParams();
  return(
    <div>
      <h1>There is friend {id} Details</h1>
    </div>
  );
};
export default FriendDetails;
