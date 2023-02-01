import React from "react";
import "./ClassVideoPage.css";
import profile from "../../assets/images/profile.jpeg";

const ClassVideoPage = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <h1>Kiwify Menbers Area</h1>
        </div>

        {/* .............. */}
        <div class="row">
          <div class="col">
            <div class="skill" style={{background: 'conic-gradient(#ffffff 70%, transparent 0)'}}>
              <div class="content">
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ......................... */}

        <div className="profile">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={profile} alt="profile-pic" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ClassVideoPage;
