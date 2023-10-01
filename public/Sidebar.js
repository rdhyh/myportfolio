import React from 'react';
import './Sidebar.css';

function Sidebar({ isOpen, toggleSidebar, setActiveMenuItem }) {
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    toggleSidebar(); // Close the sidebar when a menu item is clicked
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      <nav>
        <ul>
          <li onClick={() => handleMenuItemClick('about')}>About Me</li>
          <li onClick={() => handleMenuItemClick('experience')}>Experience</li>
          <li onClick={() => handleMenuItemClick('projects')}>Projects</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
