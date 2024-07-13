import React from "react";
import { useUserProfile } from "../../contexts/UserProfileContext";

const UserProfileDisplay: React.FC = () => {
  const { profile } = useUserProfile();
  return (
    <div>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default UserProfileDisplay;
