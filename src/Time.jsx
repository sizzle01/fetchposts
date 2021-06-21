import React from "react";

export const Time = () => {
  let showdate = new Date();
  let displaytodaysdate =
    showdate.getDate() +
    "/" +
    showdate.getMonth() +
    "/" +
    showdate.getFullYear();
  return (
    <div>
      <input type="text" value={displaytodaysdate} readOnly="true" />
    </div>
  );
};

export default Time;
