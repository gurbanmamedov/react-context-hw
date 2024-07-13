import React from "react";
import { useNotification } from "../../contexts/NotificationContext";

interface NotificationItemProps {
  notification: {
    id: number;
    message: string;
    type: string;
  };
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  const { removeNotification } = useNotification();

  return (
    <div>
      <p>
        {notification.message} - {notification.type}
      </p>
      <button onClick={() => removeNotification(notification.id)}>Close</button>
    </div>
  );
};

export default NotificationItem;
