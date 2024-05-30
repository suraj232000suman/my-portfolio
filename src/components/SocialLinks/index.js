const SocialLinks = () => {
  return (
    <div>
      <SocialLinks.Link url={"https://github.com/aakash2408"} type={"github"} />
      <SocialLinks.Link
        url={"https://github.com/aakash2408"}
        type={"facebook"}
      />
      <SocialLinks.Link url={"https://github.com/aakash2408"} type={"send"} />
      <SocialLinks.Link
        url={"https://github.com/aakash2408"}
        type={"linkedin"}
      />
    </div>
  );
};
SocialLinks.Link = ({ url, type }) => {
  return (
    <a href={url} target="_blank">
      <i className={`bi bi-${type}`}></i>
    </a>
  );
};
export default SocialLinks;
