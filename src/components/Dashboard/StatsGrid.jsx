import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  DollarSign,
  Eye,
  ShoppingCart,
  Users,
} from "lucide-react";
import React from "react";

const StatsGrid = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$25,300",
      change: "+5.4%",
      trend: "up",
      icon: DollarSign,
      progress: 70,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      title: "Active Users",
      value: "1,200",
      change: "+3.2%",
      trend: "up",
      icon: Users,
      progress: 60,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Total Orders",
      value: "3,450",
      change: "+4.1%",
      trend: "up",
      icon: ShoppingCart,
      progress: 80,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Page Views",
      value: "89%",
      change: "+2.5%",
      trend: "down",
      icon: Eye,
      progress: 90,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/20 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 mb-2">
                {stat.title}
              </p>
              <p
                className="text-3xl
             font-bold text-slate-800 mb-4"
              >
                {stat.value}
              </p>
              <div className="flex items-center space-x-2">
                {stat.trend == "up" ? (
                  <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="w-4 h-4 text-red-500" />
                )}

                <span
                  className={`text-sm font-semibold ${
                    stat.trend == "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {stat.change}
                </span>
                <span className="text-sm text-slate-500">vs Last month</span>
              </div>
            </div>
            <div
              className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-110 transition-all duration-300`}
            >
              {<stat.icon className={`w-6 h-6 ${stat.textColor}`} />}
            </div>
          </div>
          {/* Progress Bar  */}
          <div className="mt-4 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-100`}
              style={{ width: `${stat.progress}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
