import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Expenses from './Screens/Expenses/Expenses';
import Navigation from './Screens/Navigation/Navigation';
import Invoices from './Screens/Invoices/Invoices';
import Invoice from './Screens/Invoices/Invoice';
import Home from './Screens/Home/Home';

function App() {
  const [baseRoutes, setBaseRoutes]: any = useState();
  const [navRoutes, setNavRoutes]: any = useState();
  const [invoiceRoutes, setInvoiceRoutes]: any = useState();

  useEffect(() => {

    setBaseRoutes(() => {
      return [
        {
          path: '/',
          name: 'Navigation',
          element: <Navigation />
        },
        {
          path: '*',
          name: '404',
          element: (
            <div className='vh-100 d-flex align-items-center justify-content-center'>
              <h1 className='fw-bold text-center'>404, page not found</h1>
            </div>
          )
        }
      ]
    });

    setNavRoutes(() => {
      return [
        {
          path: '/expenses',
          name: 'Expenses',
          element: <Expenses />
        },
        {
          path: '/invoices',
          name: 'Invoices',
          element: <Invoices />
        },
        {
          path: '',
          name: 'Index',
          element: <Home />
        }
      ]
    });

    setInvoiceRoutes(() => {
      return [
        {
          path: ':invoiceId',
          name: 'Invoice',
          element: <Invoice />
        },
        {
          path: '',
          name: 'Index',
          element: (
            <main>
              <h2 className='text-secondary'>Select an invoice</h2>
            </main>)
        }
      ]
    });

  },[])

  return (
    <BrowserRouter>
      <Routes>
        {baseRoutes ? baseRoutes.map((route: any, index: number) => {
          return (

            route.name === '404' ? (
              <Route key={index} path={route.path} element={route.element} />
            ) : (
              <Route key={index} path={route.path} element={route.element}>

                {navRoutes.map((navRoute: any, index: number) => (

                  navRoute.name === 'Index' ? (
                    <Route key={index} index element={navRoute.element} />
                  ) : (
                    navRoute.name === 'Invoices' ? (
                      <Route key={index} path={navRoute.path} element={navRoute.element}>

                        {invoiceRoutes.map((invoiceRoute: any, index: number) => (

                          invoiceRoute.name === 'Index' ? (
                            <Route key={index} index element={invoiceRoute.element} />
                          ) : (
                            <Route key={index} path={invoiceRoute.path} element={invoiceRoute.element} />
                          )

                        ))}

                      </Route>
                    ) : (
                      <Route key={index} path={navRoute.path} element={navRoute.element} />
                    )
                  )

                ))}

              </Route>
            )

          )
        }): null}
      </Routes>
    </BrowserRouter>
  );
}

export default App;