import React from "react";

const data = [
  { name: "Amazon Giftcard", price: 79.49, quantity: 82, amount: 6518.18 },
  { name: "Flipkart Giftcard", price: 128.5, quantity: 37, amount: 4754.5 },
  { name: "Zomato Giftcard", price: 39.99, quantity: 64, amount: 2559.36 },
  { name: "Swiggy Giftcard", price: 20.0, quantity: 184, amount: 3680.0 },
];

const History = () => {
  return (
    <div className="bg-[#F7F9FB] p-6 rounded-xl shadow">
      <div className="text-lg font-semibold mb-4">History</div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[#1C1C1C66]  border-b-2">
            <th className="pb-3">Name</th>
            <th className="pb-3">Price</th>
            <th className="pb-3">Quantity</th>
            <th className="pb-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-sm">
              <td className="py-3">{item.name}</td>
              <td className="py-3">Rs {item.price.toFixed(2)}</td>
              <td className="py-3">{item.quantity}</td>
              <td className="py-3">Rs {item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
