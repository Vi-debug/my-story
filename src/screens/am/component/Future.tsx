import { useContext } from "react";
import { FontSizeContext } from "../../../global-hook/context/font-size";

const Skill = () => {
  const { heading1, title2, body1 } = useContext(FontSizeContext);
  return (
    <div className="column word-break">
      <span style={{ fontSize: body1 }} className="white-color margin-bottom14">
        In the near future, I want to become
      </span>
      <span
        style={{ fontSize: heading1 }}
        className="heading main-color margin-bottom14"
      >
        A Team-lead who can bring projects to success.
      </span>
      <span style={{ fontSize: body1 }} className="white-color margin-bottom14">
        After that, still not sure what AI will lead me to...
      </span>
    </div>
  );
};
export default Skill;
