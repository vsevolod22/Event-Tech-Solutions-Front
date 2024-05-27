
import Header from "../components/header/Header.tsx";
import './profile.css';
// @ts-ignore
import DetailedProfile from "../components/detailed-profile/DetailedProfile.tsx";
import YourChoice from "../components/your-choice/YourChoice.tsx";
import SimpleFilter from "../components/filters/simple-filter/SimpleFilter.tsx";
import YourEvent from "../components/your-event/YourEvent.tsx";
import {FC, useState} from "react";
interface ProfileProps {
    user: {role: number, reg: number}
}



const Profile: FC<ProfileProps> =  ({user}) => {
    const [modal, setModal] = useState(0);
    const getValueModal = (data: number) => {
        setModal(data);
    };
  return (
    <>
      <Header getData={getValueModal} user={user} />
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
