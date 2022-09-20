import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link style={{textDecoration: 'none'}} className="nav-link nav-link-page" to="/">home</Link>
      <Link style={{textDecoration: 'none'}} className="nav-link nav-link-page" to="/about">about</Link>
      <Link style={{textDecoration: 'none'}} className="nav-link nav-link-page" to="/projects">projects</Link>
      <Link style={{textDecoration: 'none'}} className="nav-link nav-link-page" to="/mind-palace">blog</Link>
    </div>
  )
}
