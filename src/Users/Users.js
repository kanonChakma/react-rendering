import React, { useState } from "react";
const Users = (props) => {
  const value = props.familiar;
  return (
    <div className="main-div">
      <h2>First part:</h2>
      {value ? <h3>What are you doing</h3> : <h3>do you like something</h3>}
      <h2>Second Part:</h2>
      {value && <h3>Yeah this is true value</h3>}
    </div>
  );
};
export default Users;
