import { useContext } from "react";
import { FontSizeContext } from "../../../global-hook/context/font-size";

const Introduce = () => {
  const { heading1, title2, body1 } = useContext(FontSizeContext);
  return (
    <div className="column word-break">
      <span style={{fontSize: body1}} className="white-color margin-bottom14">
        Throughout these years I and my team delivered numerous of mobile applications in
      </span>
      <span style={{fontSize: heading1}} className="heading main-color margin-bottom14">
        Staff Managing, Booking, Finance, E-commerce, etc.
      </span>
      <span style={{fontSize: body1}} className="white-color margin-bottom14">
        But I never satisfied with my little knowledge. 
      </span>
    </div> 
  );
}

export default Introduce;