import React from 'react';
import SearchBox from './SearchBox';
import Breadcrumb from './Breadcrumb';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <SearchBox />
      <Breadcrumb />
    </div>
  );
};

export default Header;

