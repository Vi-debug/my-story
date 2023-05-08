import { useContext } from "react";
import { FontSizeContext } from "../../../global-hook/context/font-size";

const Skill = () => {
  const { heading1, title2, body1 } = useContext(FontSizeContext);
  return (
    <div className="column word-break">
      <span style={{fontSize: body1}} className="white-color margin-bottom14">
        My top skills are:
      </span>
      <span style={{fontSize: heading1}} className="heading main-color margin-bottom14">
        Flutter & React Native
      </span>
      <span style={{fontSize: body1}} className="white-color margin-bottom14">
        and a little knowledge about android, ios native and web.
      </span>
    </div> 
  );
}
export default Skill;