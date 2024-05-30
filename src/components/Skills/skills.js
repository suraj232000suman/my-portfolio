import "./index.scss";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const Skills = ({ data }) => {
  const { changeTheme, startThemeChangeTimer, stopThemeChangeTimer } =
    useContext(ThemeContext);
  function handleMouseEnter(e) {
    const type = e.nativeEvent.target.id;
    if (type) {
      changeTheme(type);
    }
  }
  return (
    <div className="skills">
      <h6>Skills</h6>
      <ul
        onMouseEnter={stopThemeChangeTimer}
        onMouseLeave={startThemeChangeTimer}
        onMouseOver={handleMouseEnter}
      >
        {data.map((skill, idx) => (
          <li id={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default Skills;
