
import Header from "../components/header/Header";
import './profile.css';
// @ts-ignore
import DetailedProfile from "../components/detailed-profile/DetailedProfile.tsx";
import YourChoice from "../components/your-choice/YourChoice";
import SimpleFilter from "../components/filters/simple-filter/SimpleFilter";
import YourEvent from "../components/your-event/YourEvent";
import {FC} from "react";
interface ProfileProps {
    user: {role: number, reg: number}
}



const Profile: FC<ProfileProps> =  ({user}) => {
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
