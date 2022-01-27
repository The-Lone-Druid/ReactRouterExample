import React from 'react';
import {
  NavLink,
  Outlet
} from 'react-router-dom';

const Navigation = () => {
  return <div>
    <div className='p-3'>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <NavLink
          to="/"
          className={({isActive}: any) => isActive ? "text-danger" : ""}
        >Home</NavLink> | {" "}
        <NavLink
          to="/invoices"
          className={({isActive}: any) => isActive ? "text-danger" : ""}
        >Invoices</NavLink> | {" "}
        <NavLink
          to="/expenses"
          className={({isActive}: any) => isActive ? "text-danger" : ""}
        >Expenses</NavLink>
      </nav>
    </div>
    <Outlet />
  </div>;
};

export default Navigation;
