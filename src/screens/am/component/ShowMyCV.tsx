import { useContext } from "react";
import { FontSizeContext } from "../../../global-hook/context/font-size";

const ShowMyCV = () => {
  const { heading1, title2, body1 } = useContext(FontSizeContext);
  return (
    <div>
      <div className="margin-bottom14">
        <span style={{ fontSize: heading1 }} className="heading white-color">
          show(
          <span style={{ fontSize: heading1 }} className="heading main-color">
            MyCV
          </span>
          )
        </span>
      </div>
      <span style={{ fontSize: body1 }} className="title gray margin-top">
        print("Hope you enjoy it!")
      </span>
    </div>
  );
};

export default ShowMyCV;
