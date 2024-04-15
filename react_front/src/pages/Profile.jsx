import React from "react";
import Header from "../components/header/Header";
import DetailedProfile from "../components/detailed-profile/DetailedProfile";

const Profile = function ({ user }) {
  return (
    <>
      <Header user={user} />
      <DetailedProfile />
    </>
  );
};

export default Profile;
