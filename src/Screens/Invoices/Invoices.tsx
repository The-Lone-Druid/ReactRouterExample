import React from 'react';
import {
  getInvoices
} from '../../Data/Data';
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from 'react-router-dom';

function QueryNavLink({ to, ...props }: any) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}

const Invoices = () => {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  return <div className='Invoices' style={{ display: "flex" }}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem"
      }}
    >
      <input
        type="search"
        value={searchParams.get("filter") || ""}
        onChange={event => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
      {invoices
        .filter((invoice: any) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;
          let name = invoice.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        })
        .map((invoice: any) => (
          <QueryNavLink
            style={({ isActive }: any) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : ""
              };
            }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </QueryNavLink>
        ))}
    </nav>
    <div className="ms-2 pt-4">
      <Outlet />
    </div>
  </div>;
};

export default Invoices;
