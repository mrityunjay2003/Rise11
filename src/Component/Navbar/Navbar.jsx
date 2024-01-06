import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div className="navbar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <img
            src="ham.svg"
            alt=""
            style={{ width: "29.32px", height: "46.22px" }}
          />
        </div>
        <div className="hello">Hello User👋</div>
        <input type="text" placeholder="Search Here" className="searchBox" />

        <div className="nav-right">
          <label class="file-upload">
            <input type="file" />
            <div className="uploader">
              <img
                src="upload.svg"
                alt=""
                style={{ width: "21.32px", height: "63.220px" }}
              />
            <div className="up-name">Upload File</div>
            </div>
          </label>

          <img
            src="noti.svg"
            alt=""
            style={{ width: "29.32px", height: "46.22px" }}
          />

          <img
            src="chat.svg"
            alt=""
            style={{ width: "19.32px", height: "46.22px" }}
          />

          <img
            src="anal1.svg"
            alt=""
            style={{ width: "21.32px", height: "63.220px" }}
          />

          <div className="user">
            <div className="user-name">
              Max
              <br />
              <p id="profile">Intern</p>
            </div>
            <img
              src="./user.svg"
              alt=""
              style={{ width: "35px", height: "35px", borderRadius: "100px" }}
            />
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-close">
            <div class="sidebar1">
              <div class="logo">Skillify Admin</div>
            </div>
            <div className="close-icon" onClick={closeSidebar}>
              <img
                src="cross.png"
                alt=""
                style={{ width: "15px", height: "15px" }}
              />{" "}
            </div>
          </div>

          <div class="sidebar-content">
            <ul class="lists">
              <li class="list">
                <a href="index.html" class="nav-link">
                  <i class="bx bx-home-alt icon"></i>
                  <span class="link">Dashboard</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-home-alt icon"></i>
                  <span class="link">My Course</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-bar-chart-alt-2 icon"></i>
                  <span class="link">Calender</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-bell icon"></i>
                  <span class="link">Resource</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-message-rounded icon"></i>
                  <span class="link">Quiz</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-pie-chart-alt-2 icon"></i>
                  <span class="link">Message</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-heart icon"></i>
                  <span class="link">My Status</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-folder-open icon"></i>
                  <span class="link">Wallet</span>
                </a>
              </li>
              <li class="list">
                <a href="#" class="nav-link">
                  <i class="bx bx-cog icon"></i>
                  <span class="link">My Account</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
