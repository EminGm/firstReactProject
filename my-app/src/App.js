import React from "react";
import "./style.css";
import Header from "./components/header/header.jsx"
import Sidebar from "./components/sidebar/sidebar.jsx"
import Profile from "./components/profile/profile.jsx"

export default function App() {
  return (

    <div className="wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}
