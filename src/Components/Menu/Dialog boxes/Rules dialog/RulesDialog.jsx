import "../dialog.css";
import MenuButton from "../../Button/MenuButton";
const RulesDialog = ({ closeRulesHandle }) => {
  return (
    <div className="dialog">
      <h2>Zasady:</h2>
      <ol>
        <li>nie czituj</li>
        <li>nie oszukuj</li>
        <li>graj uczciwie</li>
        <li>
          daj diaksa na <a href="minecraftmapy.pl">minecraftmapy.pl</a>
        </li>
        <li>baw się dobrze :D</li>
      </ol>
      <MenuButton text={"Zamknij"} onButtonClick={closeRulesHandle} />
    </div>
  );
};
export default RulesDialog;
