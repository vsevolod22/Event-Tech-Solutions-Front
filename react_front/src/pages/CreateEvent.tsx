import React, { FC, useState } from "react";
import Header from "../components/header/Header";
import "./createEvent.css";
import SvgOnlineOffline from "../svg/svg-online-offline/SvgOnlineOffline";
import SvgClock from "../svg/svg-clock/SvgCLock";
import { IPostUser, IUser } from "../types/types.tsx";
import { HttpApiMethods } from "../components/utils/FetchUtils.tsx";
import UserUsersList from "../components/user-users-list/UserUsersList.tsx";
import InputFindEvent from "../components/UI/input-find-event/InputFindEvent.tsx";
const httpApiMethods = new HttpApiMethods();
interface CreateEventProps {
  user: {
    role: number;
    reg: number;
  };
}

const CreateEvent: FC<CreateEventProps> = ({ user }) => {
  const [UsersList, setUsersList] = React.useState<IUser[] | null>(null);
  const [modal, setModal] = useState(0);
  const getValueModal = (data: number) => {
    setModal(data);
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    job: "",
    avatar: "", // Add initial states for other fields as needed
    vk: "",
    telegram: "",
    mail: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmitEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleSubmitUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Constructing the IPostUser object
    const postUser: IPostUser = {
      username: formData.username,
      password: formData.password,
      job: formData.job,
      avatar: formData.avatar,
      vk: formData.vk,
      telegram: formData.telegram,
      mail: formData.mail,
      phone_number: formData.phone_number,
    };

    // Calling the PostUser function with the constructed data
    const result = await httpApiMethods.PostUser(postUser);
    console.log(result); // Handle the result as needed
    setFormData({
      username: "",
      password: "",
      job: "",
      avatar: "", // Add initial states for other fields as needed
      vk: "",
      telegram: "",
      mail: "",
      phone_number: "",
    });
  };
  return (
    <>
      <Header getData={getValueModal}></Header>
      <form className="create_event container" onSubmit={handleSubmitEvent}>
        <section className="main_section_create_event">
          <div className="main_section_create_event_column">
            <input
              type="text"
              placeholder="Ввести название мероприятия"
              className="main_content_create_event_name_event"
            />
            <div className="small_info_blocks_create_event">
              <div className="types_event_create_event">
                <div className="type_event_create_event">Тип мероприятия</div>
                <button
                  onClick={() => console.log("+")}
                  className="add_type_event_create_event"
                >
                  <p>+</p>
                </button>
              </div>
              <div className="type_of_conduct">
                <SvgOnlineOffline></SvgOnlineOffline>
                <select
                  className="block_type_of_conduct"
                  defaultValue="default"
                >
                  <option disabled style={{ display: "none" }} value="default">
                    Тип проведения
                  </option>
                  <option value="online">Онлайн</option>
                  <option value="offline">Оффлайн</option>
                </select>
              </div>
              <div className="date_time_of_conduct">
                <SvgClock></SvgClock>
                <input
                  type="date"
                  placeholder="Дата проведения"
                  className="date_of_conduct"
                ></input>
                <input
                  type="date"
                  placeholder="Дата окончания"
                  className="date_of_conduct"
                ></input>
                <input type="time" className="time_of_conduct"></input>
                <input type="time" className="duration_of_conduct"></input>
              </div>
            </div>
            <input
              className="link_event_create_event"
              placeholder="Ссылка на мероприятие"
            />
            <input
              className="link_video_create_event"
              placeholder="Добавить ссылку на видео"
            />
          </div>
          <div className="main_section_create_event_column">
            <div className="img_block_main_section">
              <button
                onClick={() => console.log("Добавить изображение")}
                className="add_img_main_section"
              >
                +
              </button>
              <p>Добавить изображение</p>
            </div>
          </div>
        </section>

        <section className="about_event_section_create_event">
          <h1>О мероприятии</h1>
          <textarea placeholder="Написать описание мероприятия"></textarea>
        </section>

        <section className="specialist_section_create_event">
          <h1>Специалист</h1>{" "}
          <div className="simple_filter">
            <InputFindEvent />
            <select
              name="type_even_selectt"
              id=""
              className="type_event_select"
            >
              <option value="">роль пользователя</option>
            </select>
          </div>
          <div className="users_list">
            {UsersList &&
              UsersList.map((user) => (
                <div
                  onClick={() =>
                    console.log("take user.id for choose specialist")
                  }
                >
                  <UserUsersList user={user} key={user.id} />
                </div>
              ))}
          </div>
        </section>
        {/* <section className="specialist_section_create_event">
          <h1>Специалист</h1>
          <div className="add_specialist_data">
            <div className="add_specialist_logo"></div>

            <div className="adds_specialist_inputs">
              <input
                placeholder="ФИО специалиста"
                className="add_name_number_mail_specialist"
              ></input>
              <textarea
                placeholder="Описание специалиста"
                className="add_description_specialist"
              ></textarea>
              <input
                placeholder="+7 (999) 999 - 99 - 99"
                className="add_name_number_mail_specialist"
              ></input>
              <input
                placeholder="email@example.ru"
                className="add_name_number_mail_specialist"
              ></input>
            </div>
            <div className="adds_specialist_materials_links">
              <p>Ссылки на материалы специалиста</p>
              <div className="circle_links">
                <div className="add_specialist_material_link">
                  <p>+</p>
                </div>
                <div className="add_specialist_material_link">
                  <p>+</p>
                </div>
                <div className="add_specialist_material_link">
                  <p>+</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="btn_section_create_event">
          <button type="submit" className="btn_post_event">
            Опубликовать мероприятие
          </button>
        </section>
      </form>
    </>
  );
};

export default CreateEvent;
