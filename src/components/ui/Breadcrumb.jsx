import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, currentPage }) => {
  return (
    <div className="site-breadcrumb" style={{ background: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)' }}>
      <div className="container">
        <h2 className="breadcrumb-title">{title}</h2>
        <ul className="breadcrumb-menu">
          <li><Link to="/">Home</Link></li>
          <li className="active">{currentPage}</li>
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumb;