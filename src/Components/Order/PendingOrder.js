import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import OrderTable from './OrderTable';

const PendingOrder = () => {
 const [pendingOrder, setPendingOrder] = useState([])
useEffect(()=>{
    fetch('http://localhost:5000/pending-order')
    .then(res=> res.json())
    .then(result=> setPendingOrder(result))
})
    return (
        <div>
       
                  <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Product</th>
          <th>Amount</th>
          <th>Address</th>
        </tr>
      </thead>
            {
                pendingOrder.map(penOrder=><OrderTable
                penorder={penOrder}
                ></OrderTable>)
            }
              </Table>
        </div>
    );
};

export default PendingOrder;