import React, { useState } from "react";
import { Badge, Button } from "antd";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);





  return (
    <div className="min-h-screen bg-[#2f4f4f] text-white p-6">
      <h2 className="text-3xl font-bold mb-8">📣 Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-lg">No new notifications</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notifications.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 backdrop-blur-sm shadow-md rounded-xl p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                {!item.read && <Badge color="red" text="New" />}
              </div>
              <p className="text-white/90">{item.message}</p>
              <p className="text-sm text-white/60 mt-2">{item.time}</p>
              {!item.read && (
                <Button
                  size="small"
                  className="mt-3 bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => markAsRead(item.id)}
                >
                  Mark as Read
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notification;
