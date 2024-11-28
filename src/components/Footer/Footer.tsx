const Footer = () => {
  const footerButtonStyle =
    "hover:underline hover:max-sm:pl-2 transition-all cursor-pointer";
  return (
    <div className="py-2 w-full bg-primary text-accent-light md:text-2xl text-lg sm:flex justify-evenly">
      <div className={footerButtonStyle}>Impressum</div>
      <div className={footerButtonStyle}>Datenschutz</div>
      <div className={footerButtonStyle}>AGB</div>
      <div className={footerButtonStyle}>Unser Discord</div>
      <div className={footerButtonStyle}>GGF weitere Links</div>
    </div>
  );
};

export default Footer;
