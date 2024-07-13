import React from "react";

import "./App.css";
import { NotificationProvider } from "./contexts/NotificationContext";
import { UserProfileProvider } from "./contexts/UserProfileContext";
import AddNotificationForm from "./components/Notifications/AddNotificationForm";
import NotificationList from "./components/Notifications/NotificationList";
import EditUserProfileForm from "./components/userProfile/EditUserProfileForm";
import UserProfileDisplay from "./components/userProfile/UserProfileDisplay";

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <UserProfileProvider>
        <div>
          <h1>Notification</h1>
          <AddNotificationForm />
          <NotificationList />
          <h1>User Profile</h1>
          <EditUserProfileForm />
          <UserProfileDisplay />
        </div>
      </UserProfileProvider>
    </NotificationProvider>
  );
};

export default App;
