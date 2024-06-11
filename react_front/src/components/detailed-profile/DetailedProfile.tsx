import { FC, useEffect, useState } from "react";
import "./detailedProfile.css";

import { HttpApiMethods } from "../utils/FetchUtils.tsx";
import Skeleton from "@mui/material/Skeleton";
import { useParams } from "react-router-dom";
import { AllUserInfo } from "../../types/types";
import SvgReward from "../../svg/svg-reward/SvgReward.jsx";
import SvgPencil from "../../svg/svg-pencil/SvgPencil.jsx";
const httpApiMethods = new HttpApiMethods();

const DetailedProfile: FC = function () {
  const [user, setUser] = useState<AllUserInfo | null>(null);
  const { id: routeId } = useParams<{ id: string }>();
  const id = routeId || localStorage.getItem("id");
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
          <pre><p>Количество баллов:  </p></pre>
          <h3>56</h3>
        </div>
      </div>
      <SvgPencil></SvgPencil>
    </div>
  );
};

export default DetailedProfile;
