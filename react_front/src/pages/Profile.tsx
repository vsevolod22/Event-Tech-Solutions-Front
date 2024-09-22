import Header from "../components/header/Header";
// @ts-ignore
import "../components/your-choice/yourChoice.css";
import Events from "../components/events/Events";
import Awards from "../components/awards/Awards";
import Hardfilter from "../components/filters/hard-filter/HardFilter";
// import DetailedProfile from "../components/detailed-profile/DetailedProfile.tsx";
import YourChoice from "../components/your-choice/YourChoice.tsx";
import SimpleFilter from "../components/filters/simple-filter/SimpleFilter.tsx";
import YourEvent from "../components/your-event/YourEvent.tsx";
import React, { FC, useEffect, useState, useRef } from "react";
import "../components/edit-profil-window/editProfilWindow.css";
import "./profile.css";
import "../components/detailed-profile/detailedProfile.css";
import EditProfilWindow from "../components/edit-profil-window/EditProfilWindow.jsx";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import Skeleton from "@mui/material/Skeleton";
import { useParams } from "react-router-dom";
import { AllUserInfo } from "../types/types";
import SvgReward from "../svg/svg-reward/SvgReward.jsx";
import SvgPencil from "../svg/svg-pencil/SvgPencil.jsx";
const httpApiMethods = new HttpApiMethods();

interface ProfileProps {
  user: { role: number; reg: number };
}

const Profile: FC<ProfileProps> = () => {
  const [modal, setModal] = useState(0);
  const getValueModal = (data: number) => {
    setModal(data);
  };
  const [user, setUser] = useState<AllUserInfo | null>(null);
  const { id: routeId } = useParams<{ id: string }>();
  const id = routeId || localStorage.getItem("id");
  const [firstBlockClicked, setFirstBlockClicked] = useState(true); // Состояние для отслеживания нажатия на первый блок
  const [secondBlockClicked, setSecondBlockClicked] = useState(false); // Состояние для отслеживания нажатия на второй блок
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Функция для обработки клика на первый блок
  const handleFirstBlockClick = () => {
    setFirstBlockClicked(true); // Устанавливаем состояние нажатия на первый блок
    setSecondBlockClicked(false); // Сбрасываем состояние нажатия на второй блок
  };

  // Функция для обработки клика на второй блок
  const handleSecondBlockClick = () => {
    setSecondBlockClicked(true); // Устанавливаем состояние нажатия на второй блок
    setFirstBlockClicked(false); // Сбрасываем состояние нажатия на первый блок
  };

  useEffect(() => {
    console.log(id);
    const getMeet = async (id: string) => {
      const newSpeaker = await httpApiMethods.GetUserById(id);
      console.log(newSpeaker);
      setUser(newSpeaker);
    };
    if (id) {
      getMeet(id);
    }
  }, [id]);
  return (
    <>
      {modalVisible && <EditProfilWindow />}
      <Header getData={getValueModal} user={user} />
      <section className="container first">
        <div className="human_frame">
          <div className="photo_card">
            {user && user.avatar ? (
              <img src={user.avatar} alt="avatar"></img>
            ) : (
              <div className="human_logo"></div>
            )}
            <div className="role">
              <p>
                {user && user.role ? (
                  user.role
                ) : (
                  <Skeleton variant="text" sx={{ fontSize: "1.25vw" }} />
                )}
              </p>
            </div>
          </div>
          <div className="human_data">
            <h1>
              {user && user.first_name && user.last_name ? (
                user.last_name + " " + user.first_name
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.875vw" }} />
              )}
            </h1>
            <h2>
              {user && user.job ? (
                user.job
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.667vw" }} />
              )}
            </h2>
            <p>
              {user && user.telegram ? (
                `TG: ${user.telegram}`
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.042vw" }} />
              )}
            </p>
            <p>
              {user && user.mail ? (
                user.mail
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.042vw" }} />
              )}
            </p>
            <div className="exp">
              <pre>
                <p>Количество баллов: </p>
              </pre>
              <h3>56</h3>
            </div>
          </div>
          <button onClick={handleOpenModal} className="edit-pencil">
            <SvgPencil />
          </button>
        </div>
      </section>
      <section className="container second">
        <>
          <div className="choice">
            <div
              onClick={handleFirstBlockClick}
              className="your_events_rewards"
            >
              <p>Ваши мероприятия</p>
              <div
                className={`${
                  firstBlockClicked ? "underline_selected" : "underline_default"
                }`}
              ></div>
            </div>
            <div
              onClick={handleSecondBlockClick}
              className="your_events_rewards"
            >
              <p>Ваши достижения</p>
              <div
                className={`${
                  secondBlockClicked
                    ? "underline_selected"
                    : "underline_default"
                }`}
              ></div>
            </div>
          </div>
          {!firstBlockClicked ? (
            <Awards />
          ) : (
            <>
              <Events />
            </>
          )}
        </>{" "}
      </section>
    </>
  );
};

export default Profile;
