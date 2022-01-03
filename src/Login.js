import React, { useState } from "react";
import "./App.css";
import db from "./firebase";
  
function Login() {
  
  
  return (
    <div className="App">
      <div className="App__form">
        <input
          type="text"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          value={customerPassword}
          onChange={(e) => setCustomerPassword(e.target.value)}
        />
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
  
export default Login;