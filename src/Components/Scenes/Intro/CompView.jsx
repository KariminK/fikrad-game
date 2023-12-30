import geekLogo from "../../../assets/logos/geek logo.png";
const CompView = () => {
  return (
    <div id="competition">
      <div className="compDiv">
        <h1>Na konkurs</h1>
        <img
          src={geekLogo}
          id="compLogo"
          alt="Gry edukacyjne eksperymentalne komputerowe"
        />
      </div>
    </div>
  );
};
export default CompView;
