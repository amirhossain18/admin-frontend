import React from 'react';
import { Table } from 'react-bootstrap';

const OrderTable = ({penorder}) => {
    
    console.log(penorder.cartProducts[1])
    return (
        <div>
            <Table striped>
     
      <tbody>
        <tr>
          <td>1</td>
          <td>{penorder.name}</td>
          <td>{penorder.phone}</td>
          <td></td>
          <td>{penorder.totalAmount} tk</td>
          <td>{penorder.mainAddress} tk</td>
          
        </tr>
  
      </tbody>
    </Table>
        </div>
    );
};

export default OrderTable;