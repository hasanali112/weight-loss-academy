import React from "react";
import { useLoaderData } from "react-router-dom";

const PaymentHistory = () => {
  const historyPayment = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction Id</th>
              <th>Class Name</th>
            </tr>
          </thead>
          <tbody>
            {historyPayment.map((payment, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{payment.email}</td>
                <td>{payment.transactionId}</td>
                <td>{payment.className}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
