import React from "react";
import "./style.css";
import Header from "./components/header.jsx"
import Sidebar from "./components/sidebar.jsx"
import Profile from "./components/profile.jsx"

export default function App() {
  return (
    
    <div className = "wrapper">
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
  );
}
