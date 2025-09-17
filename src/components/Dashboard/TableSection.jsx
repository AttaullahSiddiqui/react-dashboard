import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
const recentOrders = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2023-06-01",
  },
  {
    id: "#3848",
    customer: "Sarach Johnson",
    product: "iPhone 14 Pro",
    amount: "$1,599",
    status: "pending",
    date: "2023-06-02",
  },
  {
    id: "#3849",
    customer: "Emily Davis",
    product: "Google Pixel 7",
    amount: "$899",
    status: "failed",
    date: "2023-06-03",
  },
  {
    id: "#3850",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2023-06-01",
  },
  {
    id: "#3851",
    customer: "Mike Wilson",
    product: "Airpods Pro",
    amount: "$249",
    status: "cancelled",
    date: "2024-06-02",
  },
  {
    id: "#3852",
    customer: "Emily Davis",
    product: "Google Pixel 7",
    amount: "$899",
    status: "completed",
    date: "2023-06-03",
  },
];
const topProducts = [
  {
    name: "MacBook Pro 16",
    sales: 3421,
    revenue: "$852,229",
    trend: "down",
    change: "-3%",
  },
  {
    name: "iPhone 14 Pro",
    sales: 2400,
    revenue: "$1,200,000",
    trend: "up",
    change: "+6% ",
  },
  {
    name: "Google Pixel 7",
    sales: 1900,
    revenue: "$1,000,000",
    trend: "up",
    change: "+4% ",
  },
];

const TableSection = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700";
      case "pending":
        return "bg-amber-100 text-amber-700";
      case "failed":
        return "bg-rose-100 text-rose-700";
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-6">
      {/* Recent Order */}
      <div className="bg-white/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500">Latest customer orders</p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Order ID
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Product
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Amount
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Status
                </th>
                <th className="text-left p-4 text-sm font-semibold text-slate-600">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr
                  className="border-b border-slate-200/50 hover:bg-slate-50/50 transition-colors"
                  key={index}
                >
                  <td className="p-4">
                    <span className="text-sm font-medium text-blue">
                      {order.id}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800">
                      {order.customer}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800">
                      {order.product}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800">
                      {order.amount}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-slate-400 font-medium text-xs px-3 py-1 rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.date}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-800">
                      <MoreHorizontal className="w-4 h-4" />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800">
              <h3 className="text-lg font-bold text-slate-800">Top Products</h3>
            </div>
            <p className="text-sm text-slate-500">Best peroforming products</p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>

        {/* Dynamic Data */}
        <div className="p-6 space-y-4">
          {topProducts.map((product, index) => (
            <div
              className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors"
              key={index}
            >
              <div className="flex-1">
                <h4 className=" text-sm font-semibold text-slate-800">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500">{product.sales}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800">
                  {product.revenue}
                </p>
                <div className="flex items-center space-x-1">
                  {product.trend == "up" ? (
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-rose-500" />
                  )}
                  <span className="text-xs font-medium">{product.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableSection;
