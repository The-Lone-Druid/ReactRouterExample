import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Expenses from './Screens/Expenses/Expenses';
import Navigation from './Screens/Navigation/Navigation';
import Invoices from './Screens/Invoices/Invoices';
import Invoice from './Screens/Invoices/Invoice';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route 
            index
            element={
              <main className='p-3'>
                <h2 className='fw-bold text-secondary'>Welcome to Bookkeeper's</h2>
              </main>
            }
          />
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={
                <main>
                  <h2 className='text-secondary'>Select an invoice</h2>
                </main>
              }
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;