import React, { useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setcount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Count Increase
      </button>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export default User;
