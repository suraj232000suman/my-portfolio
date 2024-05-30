import Slider from "../../../components/Slider/index";
const WorkItem = ({ images, title, sourceCodeLink, demoLink }) => {
  return (
    <div className="work-item">
      <Slider images={images} className={"work-item-slider"} />
      <h3>{title}</h3>
      <div className="work-item__link">
        <a href={sourceCodeLink} className="work-item__source-code">
          <i className="fas fa-code" />
          Source Code
        </a>
        <a href={demoLink} className="work-item__demo">
          <i className="fas fa-code" />
          Demo
        </a>
      </div>
    </div>
  );
};

export default WorkItem;
