import { useContext } from "react";
import { FontSizeContext } from "../../../global-hook/context/font-size";

const BasicInfo = () => {
  const { heading1, title2, body1 } = useContext(FontSizeContext);

  return (
    <div>
      <div>
        <text style={{ fontSize: heading1 }} className="heading white-color">
          Viet.
        </text>
        <text style={{ fontSize: heading1 }} className="heading main-color">
          is()
        </text>
      </div>
      <div>
        <p style={{ fontSize: body1 }} className="title main-color">
          the first name of Viet Bui Anh,
        </p>
      </div>
      <div>
        <text style={{ fontSize: body1 }} className="title gray">
          A passionate front-end devloper
        </text>
      </div>
    </div>
  );
};

export default BasicInfo;
