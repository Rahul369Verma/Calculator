import React from 'react';
import Link from 'next/link'

const HeaderStyle = {
  marginLeft: '10px',
  color: 'bisque',
};

const NavBar = () => (
  <>
    <nav className="nav-container">
      <h1 style={HeaderStyle}>
        Calculator
        {/* <span style={{ color: '#f5913e' }}></span> */}
      </h1>
      <ul className="nav-links other-ul">
        <li className="nav-link"><Link href="/">Home</Link></li>
        <li className="nav-link"><Link href="/history">History</Link></li>
        <li className="nav-link"><Link href="/trash">Trash</Link></li>
      </ul>
    </nav>
  </>
);

export default NavBar;
