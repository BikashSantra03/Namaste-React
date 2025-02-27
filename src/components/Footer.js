const currYear = new Date().getFullYear();
const Footer = () => {
  return (
    <div className=" border py-5 px-2.5 mt-12.5 mb-5 text-center">
      <p>
        Copyright &copy; {currYear}, Made with 💗 by <strong>Bikash</strong>
      </p>
    </div>
  );
};

export default Footer;
