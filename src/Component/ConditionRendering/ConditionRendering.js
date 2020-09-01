import React, { useState } from "react";
import Users from "../Users/Users";
const ConditionRendering = () => {
      const [familiar, setFamiliar] = useState(false);
  return (
    <div>
      <h2>Familiar is:{familiar.toString()}</h2>
      <button onClick={() => setFamiliar(!familiar)}>Click here</button>
      <Users familiar={familiar}></Users>
    </div>
  );
};
export default ConditionRendering;
