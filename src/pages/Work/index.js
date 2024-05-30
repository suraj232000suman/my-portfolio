import { projects } from "./data";
import { useState } from "react";
import Title from "../../components/Title/Title";
import WorksMenu from "../../Menu/WorksMenu";
import WorkItem from "./Item";

// filtering out only projects which is created using react
const initalState = projects.filter((p) => p.type === "react");
const Works = () => {
  const [selectedProjects, setSelectedProjects] = useState(initalState);
  const [selectedType, setSelectedType] = useState("react");

  function handleMenuChange(type) {
    setSelectedProjects(projects.filter((p) => p.type === type));
    selectedType(type);
  }

  return (
    <div className="page" id="works">
      <Title>Projects - Talk is cheap show me the code!</Title>
      <WorksMenu
        items={["react", "vue", "js"]}
        selected={selectedType}
        clicked={handleMenuChange}
      />
      <div className="row">
        {selectedProjects.map((item) => (
          <div className="column" key={item.sourceCodeLink}>
            <WorkItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
