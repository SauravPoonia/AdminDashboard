import React from 'react';
import Header from './Header';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import '../css/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div>
    <Header />
    <div className="dashboard-container">
         <div className="dashboard-section">
         <FirstSection />
      </div>
      <div className="dashboard-section">
      <SecondSection />
      </div>
      <div className="dashboard-section">
      <ThirdSection />
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;

