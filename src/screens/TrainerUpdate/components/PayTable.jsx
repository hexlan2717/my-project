import React from 'react'
import PropTypes from 'prop-types'

function PayTable(props) {

 const { dateTime, transactionId, amountPaid, status } = props.transaction;

 let statusClass = '';
 switch (status) {
   case 'completed':
     statusClass = 'text-green-700';
     break;
   case 'paid':
     statusClass = 'text-yellow-700';
     break;
   case 'cancelled':
     statusClass = 'text-red-700';
     break;
   default:
     statusClass = '';
 }

  return (
    <tr>
    <td className=" px-4 py-2">{dateTime.toLocaleString()}</td>
    <td className=" px-4 py-2">{transactionId}</td>
    <td className=" px-4 py-2">{amountPaid.toFixed(2)}</td>
    <td className={`px-4 py-2 text-xs ${statusClass}`}> {status}</td>
  </tr>
  )
}

PayTable.propTypes = {

  dateTime: PropTypes.instanceOf(Date),
  transactionId: PropTypes.string,
  amountPaid: PropTypes.number,
  status: PropTypes.oneOf(['paid', 'completed', 'cancelled'])
}

export default PayTable
