import { useState } from "react";
import Menu from "./Components/Menu/Menu";
import ChooseCharacter from "./Components/ChooseCharacter/ChooseCharacter";
function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const playGameHandle = () => {
    setIsGameOn(true);
  };
  if (!isGameOn)
    return (
      <>
        <Menu onPlayGame={playGameHandle} />
      </>
    );
  else return <ChooseCharacter />;
}

export default App;
