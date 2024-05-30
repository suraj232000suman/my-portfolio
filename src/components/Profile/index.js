import "./index.scss";
import { useContext } from "react";
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Skills from "../Skills/skills";
import Info from "../Info/Info";
import pic from "../../Assets/boy-face.jpg";
import { useAnimation } from "../../use/animation";
import { ThemeContext } from "../../context/ThemeContext";
const Profile = () => {
  const { backgroundImage, type } = useContext(ThemeContext);
  const { animation } = useAnimation();
  return (
    <div className="profile">
      {console.log(backgroundImage, type)}
      <div className="profile__banner">
        <div
          className={`profile__photo ${animation}`}
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <img src={pic} alt={type} />
      </div>
      <div className="profile__content">
        <div className="profile__title">SURAJ SUMAN</div>
        <TypedText dataText={["Developer", "Freelancer", "Programmer"]} />
        <SocialLinks />
        <Info icon="geo-alt">Delhi/India</Info>
        <Skills
          data={[
            "React",
            "Node",
            "Express",
            "React-Native",
            "Vue",
            "React-MUI",
            "SQL",
          ]}
        />
      </div>
      <div className="profile__contact">
        <a href="link to your  resume stored in drive" target="_blank">
          <span>Download CV</span>
        </a>
        <a href="mailto:surajsuman232000@gmail.com">Contact Me</a>
      </div>
    </div>
  );
};
export default Profile;
