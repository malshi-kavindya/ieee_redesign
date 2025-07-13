import React, { useState } from 'react';

import logo from '../assets/logo.png';

const Header = () => {
  const [dropdown, setDropdown] = useState('');

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? '' : menu);
  };

  return (
    <header className="ieee-header">
      <div className="topbar">
        <ul>
          <li><a href="https://ieee.org">IEEE.org</a></li>
          <li><a href="https://ieeexplore.ieee.org">IEEE Xplore Digital Library</a></li>
          <li><a href="https://standards.ieee.org">IEEE Standards</a></li>
          <li><a href="https://spectrum.ieee.org">IEEE Spectrum</a></li>
          <li><a href="#">More Sites</a></li>
        </ul>
        <input type="text" className="search" placeholder="Search..." />
      </div>

      <nav className="navbar">
        <div className="container">
          <img src={logo} alt="IEEE Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="#">Home</a></li>

            <li
              onMouseEnter={() => toggleDropdown('about')}
              onMouseLeave={() => toggleDropdown('')}
            >
              <a href="#">About Us ▾</a>
              {dropdown === 'about' && (
                <ul className="dropdown">
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Leadership</a></li>
                  <li><a href="#">History</a></li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => toggleDropdown('news')}
              onMouseLeave={() => toggleDropdown('')}
            >
              <a href="#">News ▾</a>
              {dropdown === 'news' && (
                <ul className="dropdown">
                  <li><a href="#">Announcements</a></li>
                  <li><a href="#">Press Releases</a></li>
                </ul>
              )}
            </li>

            <li><a href="#">Events</a></li>
            <li><a href="#">Gallery</a></li>

            <li
              onMouseEnter={() => toggleDropdown('section')}
              onMouseLeave={() => toggleDropdown('')}
            >
              <a href="#">Section Organizational Units ▾</a>
              {dropdown === 'section' && (
                <ul className="dropdown">
                  <li><a href="#">Young Professional</a></li>
                  <li><a href="#">Women in Engineering</a></li>
                  <li><a href="#">Section Chapters</a></li>
                  <li><a href="#">Student Activities</a></li>
                  <li><a href="#">Student Branches</a></li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => toggleDropdown('docs')}
              onMouseLeave={() => toggleDropdown('')}
            >
              <a href="#">Documents ▾</a>
              {dropdown === 'docs' && (
                <ul className="dropdown">
                  <li><a href="#">Policies</a></li>
                  <li><a href="#">Reports</a></li>
                </ul>
              )}
            </li>

            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Conferences ▾</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
