import React, { FC, useEffect, useState } from "react";
import "./specialist.css";
import SvgBookLink from "../../svg/svg-book-link/SvgBookLink";
import SvgTelegramLink from "../../svg/svg-telegram-link/SvgTelegramLink";
import { HttpApiMethods } from "../utils/FetchUtils.tsx";
import Skeleton from "@mui/material/Skeleton";
import { AllUserInfo, IMeet } from "../../types/types.tsx";
import SvgVk from "../../svg/svg-vk/svg-vk.jsx";
const httpApiMethods = new HttpApiMethods();

interface SpecialistProps {
  meet: IMeet | null;
}

const Specialist: FC<SpecialistProps> = ({ meet }) => {
  const [speaker, setSpeaker] = useState<AllUserInfo | null>(null);
  useEffect(() => {
    if (meet) {
      const getMeet = async (id: number) => {
        const newSpeaker = await httpApiMethods.GetUserById(id);
        console.log(newSpeaker);
        setSpeaker(newSpeaker);
      };
      getMeet(meet.speaker.id);
    }
  }, [meet]);

  return (
    <div className="specialist container">
      <h1>Специалист</h1>
      <div className="specialist_detailed">
        <div className="about_specialist">
          {speaker && speaker.avatar ? (
            <img
              className="logo_specialist"
              src={speaker.avatar}
              alt="avatar"
            ></img>
          ) : (
            <div className="logo_specialist"></div>
          )}
          <div className="data_specialist">
            <h1>
              {speaker && speaker.first_name && speaker.last_name ? (
                speaker.last_name + " " + speaker.first_name
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.875vw" }} />
              )}
            </h1>
            <h2>
              {speaker && speaker.job ? (
                speaker.job
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.667vw" }} />
              )}
            </h2>
            <p>
              {speaker && speaker.phone_number ? (
                speaker.phone_number
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.146vw" }} />
              )}
            </p>
            <p>
              {speaker && speaker.mail ? (
                speaker.mail
              ) : (
                <Skeleton variant="text" sx={{ fontSize: "1.146vw" }} />
              )}
            </p>
          </div>
        </div>
        <div className="specialist_links">
          <p>Ссылки на материалы специалиста</p>
          <div className="svgs_links_specialist">
            {speaker && speaker.telegram && (
              <a
                href={`https://web.telegram.org/k/#${speaker.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgTelegramLink />
              </a>
            )}
            {speaker && speaker.vk && (
              <a
                href={`https://${speaker.vk}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SvgVk />
              </a>
            )}

            <SvgBookLink />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
