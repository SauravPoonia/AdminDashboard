
import React, { useState } from "react";
import "../css/SecondSection.css";

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="second-section-container">
      <h2 className="section-heading">Tasks</h2>
      <div className="tabs-container">
        <div
          className={`tab ${activeTab === "daily" ? "active" : ""}`}
          onClick={() => handleTabClick("daily")}
        >
          Daily
        </div>
        <div
          className={`tab ${activeTab === "pending" ? "active" : ""}`}
          onClick={() => handleTabClick("pending")}
        >
          Pending
        </div>
        <div
          className={`tab ${activeTab === "monthly" ? "active" : ""}`}
          onClick={() => handleTabClick("monthly")}
        >
          Monthly
        </div>
      </div>
      <div className="tab-content">
        {activeTab === "daily" && <p>No daily tasks</p>}
        {activeTab === "pending" && <p>No pending tasks</p>}
        {activeTab === "monthly" && <p>No monthly tasks</p>}
      </div>
    </div>
  );
};

export default SecondSection;
