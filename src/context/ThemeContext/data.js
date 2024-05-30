import react from "../../Assets/react.png";
import node from "../../Assets/node.png";
import js from "../../Assets/js.png";
import redux from "../../Assets/redux.jpg";
// import firebase from '../../assets/firebase.png';
import vue from "../../Assets/vue.jpeg";
import mongodb from "../../Assets/mongoDB.png";

export const THEMES = {
  react: {
    backgroundImage: react,
    linearGradient: createLinearGradient("#61dafb", "#222222"),
    primaryColor: "#61dafb",
    color: "#222222",
  },
  vue: {
    backgroundImage: vue,
    linearGradient: createLinearGradient("#49D191", "#33475F"),
    primaryColor: "#33475F",
    color: "#49D191",
  },
  node: {
    backgroundImage: node,
    linearGradient: createLinearGradient("#80BD01", "#333333"),
    primaryColor: "#333333",
    color: "#80BD01",
  },
  javascript: {
    backgroundImage: js,
    linearGradient: createLinearGradient("#F7E018", "#000000"),
    primaryColor: "#F7E018",
    color: "#000000",
  },

  redux: {
    backgroundImage: redux,
    linearGradient: createLinearGradient("#764ABD", "#1E1E1E"),
    primaryColor: "#764ABD",
    color: "#1E1E1E",
  },
  mongodb: {
    backgroundImage: mongodb,
    linearGradient: createLinearGradient("#4DB33D", "#3F3E42"),
    primaryColor: "#F80090",
    color: "#242A31",
  },
};

function createLinearGradient(color1, color2) {
  return `linear-gradient(to bottom right, ${color1} 0%, ${color2} 100%)`;
}
