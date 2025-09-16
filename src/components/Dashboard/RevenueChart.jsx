import React from "react";

const RevenueChart = () => {
  const data = [
    { month: "Jan", revenue: 45000, expenses: 32000 },
    { month: "Feb", revenue: 52000, expenses: 38000 },
    { month: "Mar", revenue: 42000, expenses: 30000 },
    { month: "Apr", revenue: 45000, expenses: 32000 },
    { month: "May", revenue: 52000, expenses: 38000 },
    { month: "Jun", revenue: 42000, expenses: 30000 },
    { month: "Jul", revenue: 45000, expenses: 32000 },
    { month: "Aug", revenue: 52000, expenses: 38000 },
    { month: "Sep", revenue: 42000, expenses: 30000 },
    { month: "Oct", revenue: 45000, expenses: 32000 },
    { month: "Nov", revenue: 52000, expenses: 38000 },
    { month: "Dec", revenue: 42000, expenses: 30000 },
  ];
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-800">Revenue Chart</h3>
          <p className="text-sm text-slate-500">Monthly revenue and expenses</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            <div className="text-sm text-slate-600">
              <span>Revenue</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"></div>
            <div className="text-sm text-slate-600">
              <span>Expenses</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-80"></div>
    </div>
  );
};

export default RevenueChart;
