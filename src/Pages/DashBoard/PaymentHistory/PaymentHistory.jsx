import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
  const [historyPayment, setHistoryPayment] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(()=>{
    fetch(`https://weight-loss-server.vercel.app/enrollhistory/${user?.email}`)
    .then(res=> res.json())
    .then(data=> setHistoryPayment(data))
  },[])



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
