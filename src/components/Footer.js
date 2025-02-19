const currYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className="footer">
      <p>
        {" "}
        Copyright &copy; {currYear}, Made with 💗 by <strong>Bikash</strong>
      </p>
    </div>
  );
};

export default Footer;
