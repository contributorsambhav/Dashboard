import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"; // Import Recharts components
import { FaDollarSign, FaClock, FaFileInvoice, FaUsers } from "react-icons/fa";

// Sample data for the latest invoices
const latestInvoices = [
  { id: "INV-001", date: "2024-10-01", amount: 150, status: "Paid" },
  { id: "INV-002", date: "2024-10-05", amount: 200, status: "Pending" },
  { id: "INV-003", date: "2024-10-10", amount: 250, status: "Paid" },
  { id: "INV-004", date: "2024-10-12", amount: 300, status: "Pending" },
  { id: "INV-005", date: "2024-10-14", amount: 350, status: "Paid" },
];

const UserDashboard = () => {
  // Sample data for the graph
  const chartData = [
    { month: "Jan", amount: 100 },
    { month: "Feb", amount: 120 },
    { month: "Mar", amount: 80 },
    { month: "Apr", amount: 150 },
    { month: "May", amount: 130 },
    { month: "Jun", amount: 170 },
  ];

  return (
    <div className="text-white p-4">
      {/* User Info Header */}
      <h2 className="text-2xl font-bold">Sambhav's Dashboard</h2>
      <p className="text-gray-400 mt-2">Welcome to your dashboard!</p>

      {/* Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <FaDollarSign className="text-3xl mr-2 text-green-400" />
          <div>
            <h3 className="text-xl">Collected</h3>
            <p className="text-lg">₹ 5000</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <FaClock className="text-3xl mr-2 text-yellow-400" />
          <div>
            <h3 className="text-xl">Pending</h3>
            <p className="text-lg">₹ 1200</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <FaFileInvoice className="text-3xl mr-2 text-blue-400" />
          <div>
            <h3 className="text-xl">Total Invoices</h3>
            <p className="text-lg">25</p>
          </div>
        </div>
        <div className="bg-gray-800 p-4 rounded flex items-center">
          <FaUsers className="text-3xl mr-2 text-purple-400" />
          <div>
            <h3 className="text-xl">Total Customers</h3>
            <p className="text-lg">150</p>
          </div>
        </div>
      </div>

      {/* Graph and Latest Invoices */}
      <div className="flex flex-col lg:flex-row mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Graph Area */}
        <div className="flex-1 text-gray-800 font-semibold bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-bold mb-4">Monthly Invoices Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="rgba(72, 192, 25, 0.6)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Latest Invoices */}
        <div className="flex-1 bg-gray-800 p-4 rounded">
          <h3 className="text-xl font-bold mb-4">Latest Invoices</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-300">
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {latestInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-700">
                  <td className="py-2">{invoice.id}</td>
                  <td className="py-2">{invoice.date}</td>
                  <td className="py-2">₹ {invoice.amount}</td>
                  <td className={`py-2 ${invoice.status === "Paid" ? 'text-green-400' : 'text-yellow-400'}`}>
                    {invoice.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
