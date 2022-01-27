import React from 'react';
import {
  useParams,
  useNavigate
} from 'react-router-dom';
import {
  getInvoice,
  deleteInvoice
} from '../../Data/Data';

const Invoice = () => {
  let navigate = useNavigate();
  let params = useParams();
  let invoice: any = getInvoice(parseInt(params.invoiceId || '', 10));

  return <div>
    <h2 className='border-bottom border-dark'>Invoice {params.invoiceId}</h2>
    <div>
      <h4>Total Due: {invoice?.amount}</h4>
      <p className='mb-0'>
        {invoice?.name}: {invoice?.number}
      </p>
      <p>Due Date: {invoice?.due}</p>
      <button
        className='btn btn-danger'
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices");
        }}
      >
        Delete
      </button>
    </div>
  </div>;
};

export default Invoice;
