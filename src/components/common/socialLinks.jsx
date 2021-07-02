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
            {props.titles ? <sup className="sup">{item.title}</sup> : ''}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
