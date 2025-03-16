import React from "react";

const Notifications = () => {
  const notifications = [
    { id: 1, message: "New issue reported in your area!", type: "alert" },
    { id: 2, message: "Your complaint has been resolved.", type: "success" },
    { id: 3, message: "Scheduled maintenance tomorrow.", type: "info" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Notifications</h1>
      <div className="mt-4 space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded shadow-md ${
              notification.type === "alert"
                ? "bg-red-100 text-red-800"
                : notification.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {notification.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
