// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'


export default function Navbar(props) {
  const { active } = props;
  return (
    <nav  className={`navbar ${active ? 'active' : ''}`}>
      
      <Link  href="/employeeSignin"  >
          Employees
       </Link>
      <a href="/studentSignin" className='active'>Students</a>

      
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
