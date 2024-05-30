const Info = ({ children, icon }) => {
  return (
    <>
      <i class={`bi bi-${icon}`}></i>
      {children}
    </>
  );
};
export default Info;
