import React, { useState } from 'react';
import '../css/FirstSection.css';

const FirstSection = () => {
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: 'Production',
      subItems: [
        { id: 11, title: 'Dying' },
        { id: 12, title: 'Finishing' },
        { id: 13, title: 'Crusting' },
      ],
    },
    { id: 2, title: 'Reports' },
    { id: 3, title: 'Planning' },
    { id: 4, title: 'Finances' },
  ]);

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState(null);

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem.id);
    setSelectedSubMenuItem(null);
  };

  const handleSubMenuItemClick = (subMenuItem) => {
    setSelectedSubMenuItem(subMenuItem.id);
  };

  return (
    <div className="first-component">
      <div className="user-details">
        <h1>Saurav Poonia</h1>
      </div>
      <div className="notifications">
        <h2>Notifications</h2>
        <p>Some text in smaller font size</p>
      </div>
      <div className="menu">
        <h2>Menu</h2>
        {menuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            className={`menu-item ${
              selectedMenuItem === menuItem.id ? 'active' : ''
            }`}
            onClick={() => handleMenuItemClick(menuItem)}
          >
            {menuItem.title}
            {menuItem.subItems && selectedMenuItem === menuItem.id && (
              <div className="sub-menu">
                {menuItem.subItems.map((subMenuItem) => (
                  <div
                    key={subMenuItem.id}
                    className={`sub-menu-item ${
                      selectedSubMenuItem === subMenuItem.id ? 'active' : ''
                    }`}
                    onClick={() => handleSubMenuItemClick(subMenuItem)}
                  >
                    {subMenuItem.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstSection;
