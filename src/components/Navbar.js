import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link style={{textDecoration: 'none'}} className="navLink navLink-page" to="/">home</Link>
      <Link style={{textDecoration: 'none'}} className="navLink navLink-page" to="/about">about</Link>
      <Link style={{textDecoration: 'none'}} className="navLink navLink-page" to="/projects">projects</Link>
    </div>
  )
}
