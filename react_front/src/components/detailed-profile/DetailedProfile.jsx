import React, {useEffect, useState} from "react";
import "./detailedProfile.css";
import { HttpApiMethods } from '../utils/FetchUtils';
import Skeleton from '@mui/material/Skeleton';
const httpApiMethods = new HttpApiMethods()


const DetailedProfile = function () {
  const [user, setUser] = useState(null);
  const id = 1
  useEffect(() => {
  
      const getMeet = async (id) => {
    
        const newSpeaker = await httpApiMethods.GetUserById(id)
        console.log(newSpeaker);
        setUser(newSpeaker);
          
          
  
      };
      getMeet(id);
    
    
  }, [id]);
  return (
    <div className="human_frame">
      <div className="photo_card">
        {user && user.avatar ? <img src={user.avatar} alt="avatar"></img> : <div className="human_logo"></div>}
        <div className="role">
          <p>{user && user.role ? user.role :  <Skeleton variant="text" sx={{ fontSize: '24px' }} />}</p>
        </div>
      </div>
      <div className="human_data">
        <h1>{user && user.first_name && user.last_name ?  user.last_name + ' ' + user.first_name :  <Skeleton variant="text" sx={{ fontSize: '36px' }} />}</h1>
        <h2>{user && user.job ?  user.job :  <Skeleton variant="text" sx={{ fontSize: '32px' }} />}</h2>
        <p>{user && user.telegram ? `TG: ${user.telegram}` : <Skeleton variant="text" sx={{ fontSize: '20px' }} />}</p>
        <p>{user && user.mail ? user.mail : <Skeleton variant="text" sx={{ fontSize: '20px' }} />}</p>
        <div className="exp">
          <div className="lvl">
            <p>0</p>
          </div>
          <div className="exp_scale"></div>
          <div className="lvl">
            <p>1</p>
            <div className="reward_svg">
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                href="http://www.w3.org/1999/xlink"
              >
                <rect
                  width="21"
                  height="21"
                  transform="matrix(-1 0 0 1 21.0059 0)"
                  fill="url(#pattern0_378_670)"
                />
                <defs>
                  <pattern
                    id="pattern0_378_670"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use href="#image0_378_670" transform="scale(0.01)" />
                  </pattern>
                  <image
                    id="image0_378_670"
                    width="100"
                    height="100"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC20lEQVR4nO2csWoUURSGP1EhoLIRK7EVfABBsNAiNgaxsLLPCwhaREmhaGOrnTYW0VbQJ1DB7cVaEBNQEA2kCCjokYG7MFxnJsnN7O7Jnv+D0+z9Z+bO+c85y07CgBB74DzwDJjbgXYuaatjRM9cAYaApVjawTFLNf0wnUP0xINacqv4CBzY5pgP2TH35UZ/nAR+ZQle6NBfyrS/gVMypF9eZEl+1aF9nWmfy4z+OZsl+S9wpkF3GviTac/JkPEwzBL9qEHzONO8lxllLAB3gUGH5nqW7M1MP0if1TXVMW0M0jW7vo/C8q6W5IfAfIPmEPAlS/jN2vqtbG0dONxwnqPAMvAz6d6O8b72JRezRFqHMXcy3WfgYIpP2drtFiN+NFzvwgTv1z0vGxJkKarkrQDHkvYEsJVprqWof7aVtKRjV1qMGEW1B1FL2HJthLQZcy/N/afZ2ps0duqfPQGOADeAbx3nHXXicbnxP/Mp6RsdCfwOrHasj2I1advWN9K1mr6rREHHWGGoI5wYs7nfR9NV4OsYKjR6rAGLJYasO9i8zWhUv6V2zbQ3bTMeMoQZM8QrFmWfYW50QsgQZ8gQZ8gQZ8gQZ8gQZ8gQZ8gQZ8gQZ8gQZ8gQZ+jhItN/gKinvcywIWsONm0zGkV/oFps+C9BBb2YcZke2HPLjQmLuq+wN16IDEGGuMDUIcEqsRCNLGSIC0wdEqwSC9HIQoa4wNQhwSqxEI0sZIgLTB0SrBIL0chChrjA1CHBKrEQjSxkiAtMHRKsEgvRyEKGuMDUIcEqsRCNLGSIC0wdEqwSC9HIQoa4wNQhwSqxEI0sZIgLTB0SrBIL0chChrjA1CHBKrEQjSxkiAtMHRKsEgvRyEKGuMDUIcEqsRCNLGSIC0wdEqwSC9HIQoa4wNQhwSqxEI0sghuiYFc5kCH4Kpre0TsYmew7FrdD72Bkuu9YFEIIIYQQQgghhBACR/wDTaWcuby/r8IAAAAASUVORK5CYII="
                  />
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="edit">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.5026 1.25163C20.1624 -0.408104 22.8534 -0.40809 24.513 1.25163L24.7561 1.49469C26.4159 3.15442 26.4159 5.84537 24.7561 7.5051L22.2949 9.96629L8.34292 23.9184C8.16136 24.0998 7.93387 24.2286 7.68478 24.291L2.01811 25.7076C1.53534 25.8283 1.02464 25.6868 0.672771 25.335C0.3209 24.9831 0.179445 24.4724 0.300145 23.9896L1.71681 18.323C1.77909 18.0739 1.90789 17.8464 2.08944 17.6648L16.1229 3.63135L18.5026 1.25163ZM22.5095 3.2551C21.9563 2.70186 21.0593 2.70186 20.5061 3.2551L19.1091 4.6521L21.3126 6.9417L22.7526 5.50163C23.3058 4.9484 23.3058 4.05141 22.7526 3.49816L22.5095 3.2551ZM19.3087 8.94554L17.1052 6.65593L4.37038 19.3908L3.62153 22.3862L6.61691 21.6374L19.3087 8.94554Z"
            fill="#D9D9D9"
          />
        </svg>
      </div>
    </div>
  );
};

export default DetailedProfile;
