import React from "react";
import Header from "../components/header/Header";
import DetailedProfile from "../components/detailed-profile/DetailedProfile";
import YourChoice from "../components/your-choice/YourChoice";
import SimpleFilter from "../components/filters/simple-filter/SimpleFilter";
import YourEvent from "../components/your-event/YourEvent";

const Profile = function ({ user }) {
  return (
    <>
      <Header user={user} />
      <section className="container first">
        <DetailedProfile />
      </section>
      <section className="container second">
        <YourChoice />
        <SimpleFilter />
      </section>
      <YourEvent />
    </>
  );
};

export default Profile;
