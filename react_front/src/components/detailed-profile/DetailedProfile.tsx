// import React, { FC, useEffect, useState, useRef } from "react";
// import "./detailedProfile.css";
// import EditProfilWindow from "../edit-profil-window/EditProfilWindow.jsx";
// import { HttpApiMethods } from "../utils/FetchUtils.tsx";
// import Skeleton from "@mui/material/Skeleton";
// import { useParams } from "react-router-dom";
// import { AllUserInfo } from "../../types/types";
// import SvgReward from "../../svg/svg-reward/SvgReward.jsx";
// import SvgPencil from "../../svg/svg-pencil/SvgPencil.jsx";
// const httpApiMethods = new HttpApiMethods();

// const DetailedProfile: FC = function () {
//   const [user, setUser] = useState<AllUserInfo | null>(null);
//   const { id: routeId } = useParams<{ id: string }>();
//   const id = routeId || localStorage.getItem("id");

//   useEffect(() => {
//     console.log(id);
//     const getMeet = async (id: string) => {
//       const newSpeaker = await httpApiMethods.GetUserById(id);
//       console.log(newSpeaker);
//       setUser(newSpeaker);
//     };
//     if (id) {
//       getMeet(id);
//     }
//   }, [id]);

//   return (
//     <></>
//   );
// };

// export default DetailedProfile;
