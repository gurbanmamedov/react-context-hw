import React, { useState } from "react";
import { useNotification } from "../../contexts/NotificationContext";
const AddNotificationForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [type, setType] = useState<string>("");
  const { addNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(message, type);
    setMessage("");
    setType("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>
      <button type="submit">Add Notification</button>
    </form>
  );
};

export default AddNotificationForm;
