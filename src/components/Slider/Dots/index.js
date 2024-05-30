const Dots = ({ len, activeItem, changeImage }) => {
  const dots = [];
  for (let i = 0; i < len; i++) {
    let dotClass = "owl-dot";

    if (activeItem === i) {
      dotClass += "active";
    }
    dots.push(
      <button
        onClick={() => {
          changeImage(i);
        }}
        className={dotClass}
      ></button>
    );
  }

  return <div className="owl-dots">{dots}</div>;
};
export default Dots;
