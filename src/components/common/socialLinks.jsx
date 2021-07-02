const SocialLinks = (props) => {
  return (
    <div className="social">
      {props.socialLink.map((item) => {
        return (
          <a
            key={item.icon}
            href={item.to}
            _target="_blank"
            className="social__link"
          >
            <i className={item.icon}></i>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
