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
import { AllUserInfo, IType } from "../types/types";
import SvgReward from "../svg/svg-reward/SvgReward.jsx";
import SvgPencil from "../svg/svg-pencil/SvgPencil.jsx";
import Login from "../components/login-window/Login.tsx";
import { Padding } from "@mui/icons-material";
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
  const [filters, setFilters] = useState<{ type: string; isUpcoming: boolean }>(
    {
      type: "",
      isUpcoming: null,
    }
  );
  const [eventTypes, setEventTypes] = useState<IType[]>([]);
  const [totalEvents, setTotalEvents] = useState<number>(0); // Добавлен стейт для общего количества мероприятий
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const defaultRole = "Участник";
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
    const getMeet = async (id: string) => {
      const newSpeaker = await httpApiMethods.GetUserById(id);
      setUser(newSpeaker);
    };
    if (id) {
      getMeet(id);
    }
  }, [id, localStorage.getItem("token")]);
  return (
    <>
      {modalVisible && (
        <EditProfilWindow onClose={handleCloseModal} userId={id} />
      )}
      <Header getData={getValueModal} />
      <Login getData={getValueModal} visible={modal} setVisible={setModal} />
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
                {user && user.groups[0]?.name
                  ? user.groups[0].name
                  : // <Skeleton variant="text" sx={{ fontSize: "1.25vw" }} />
                    defaultRole}
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
            {/* <div className="exp">
              <pre>
                <p>Количество баллов: </p>
              </pre>
              <h3>56</h3>
            </div> */}
          </div>
          <button onClick={handleOpenModal} className="edit-pencil">
            <SvgPencil />
          </button>
        </div>
      </section>
      <section className="second">
        <>
          <div className="container choice">
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
            <Awards id={user?.id} />
          ) : (
            <>
              <Events
                filters={filters}
                onTypesExtracted={setEventTypes}
                setTotalEvents={setTotalEvents}
              />
            </>
          )}
        </>{" "}
      </section>
    </>
  );
};

export default Profile;
