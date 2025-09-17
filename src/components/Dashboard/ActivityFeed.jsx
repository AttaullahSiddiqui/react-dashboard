import {
  Bell,
  Clock,
  CreditCard,
  Settings,
  ShoppingCart,
  User,
} from "lucide-react";
import React from "react";
const activities = [
  {
    id: 1,
    type: "User",
    icon: User,
    title: "New user registered",
    description: "John Smith created an account",
    time: "2 hours ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    type: "order",
    icon: ShoppingCart,
    title: "New order received",
    description: "John Smith created an account",
    time: "5 minutes agon",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100",
  },
  {
    id: 3,
    type: "notification",
    icon: Bell,
    title: "Low stock alert",
    description: "iPhone 15 stock is low",
    time: "1 hour ago",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    id: 4,
    type: "notification",
    icon: CreditCard,
    title: "New order received",
    description: "John Smith created an account",
    time: "2 hours ago",
    color: "text-amber-500",
    bgColor: "bg-amber-100",
  },
  {
    id: 5,
    type: "system",
    icon: Settings,
    title: "System update",
    description: "Database backup complete",
    time: "2 hours ago",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
  },
];

const ActivityFeed = () => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-b-2xl  border border-slate-200/50">
      <div className="p-6 border-slate-200/50">
        <div>
          <h3 className="text-lg font-bold text-slate-800">Activity Feed</h3>
          <p className="text-sm text-slate-500">Recent System Activities</p>
        </div>
        <button className="text-blue-300 hover:text-blue-700 text-sm font-medium">
          View All
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              className="flex items-start space-x-4 rounded-xl p-3 hover:bg-slate-50 transition-colors"
              key={index}
            >
              <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-slate-800">
                  {activity.title}
                </h4>
                <p className="text-sm text-slate-600 truncate">
                  {activity.description}
                </p>
                <div className="flex items-center-safe space-x-1 mt-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-500">
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
