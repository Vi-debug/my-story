import { useContext } from "react";
import { FontSizeContext } from "../../../global-hook/context/font-size";

const Personal = () => {
  const { heading1, title2, body1 } = useContext(FontSizeContext);
  return (
    <div className="column word-break">
      <span style={{fontSize: body1}} className="white-color margin-bottom14">
        I'm also in love with knowledge around the world.
      </span>
      <span style={{fontSize: heading1}} className="heading main-color margin-bottom14">
        Kuzgenazt, Monster Box
      </span>
      <span style={{fontSize: body1}} className="white-color margin-bottom14">
        Learning to write something different than code also
      </span>
    </div> 
  );
}
export default Personal;