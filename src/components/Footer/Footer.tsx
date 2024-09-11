const Footer = () => {
  const footerButtonStyle =
    "hover:pl-2 hover:sm:pl-0 hover:sm:pt-2 transition-all";
  return (
    <div className="w-full bg-primary text-accent-light md:text-2xl text-lg sm:flex justify-evenly">
      <div className={footerButtonStyle}>Impressum</div>
      <div className={footerButtonStyle}>Datenschutz</div>
      <div className={footerButtonStyle}>AGB</div>
      <div className={footerButtonStyle}>Unser Discord</div>
      <div className={footerButtonStyle}>GGF weitere Links</div>
    </div>
  );
};

export default Footer;
