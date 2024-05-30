import "./App.css";
import "./index.scss";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Menu from "./Menu/Menu";
import BgBubbles from "./components/BgBubble";
import About from "./pages/About";
import Works from "./pages/Work";
import ContactForm from "./pages/Contact/ContactForm";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="page-wrap">
        <BgBubbles />
        <Router>
          <div className="container">
            <Menu />
            <Profile />
            <AnimatedRoutes />
          </div>
        </Router>
      </div>
    </>
  );
}
const Resume = () => {
  return <h1>Resume</h1>;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-wrapper">
      <CSSTransition
        classNames="transition"
        timeout={1000}
        unmountOnExit
        key={location.pathname}
      >
        <Routes location={location}>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
