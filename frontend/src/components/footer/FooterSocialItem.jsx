const FooterSocialItem = ({ children, url }) => {
  return (
    <a href="/">
      <div className="w-[2.8rem] h-[2.8rem] bg-white rounded-full flex justify-center items-center">
        {children}
      </div>
    </a>
  );
};

export default FooterSocialItem;
