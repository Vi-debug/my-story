import { useContext } from "react";
import { backgroundColor, mainColor } from "../../const/colors";
import { FontSizeContext } from "../../global-hook/context/font-size";
import useWindowDimensions from "../../global-hook/dimension";
import "./am.css";
import BasicInfo from "./component/BasicInfo";
import Future from "./component/Future";
import Introduce from "./component/Introduce";
import Personal from "./component/Personal";
import ShowMyCV from "./component/ShowMyCV";
import Skill from "./component/Skill";
import WorkHistory from "./component/WorkTechJA";

function Am() {
  const { heading1, title2, body1 } = useContext(FontSizeContext);
  const { width } = useWindowDimensions();

  const workAtTechJA = () => (
    <WorkHistory at="TechJA" from="2019" to="2020">
      <span style={{ fontSize: body1 }} className="title gray">
        return "Android tutor"
      </span>
      <span style={{ fontSize: body1, marginTop: 20 }} className="title gray">
        What I did: Teaching hundreds of students how to code
      </span>
    </WorkHistory>
  );

  function workAtCooftech() {
    return (
      <WorkHistory at="Cooftech" from="Jan-2020" to="May-2020">
        <span style={{ fontSize: body1 }} className="title gray margin-bottom14">
          return "Flutter devloper - Fresher"
        </span>
        <span style={{ fontSize: body1 }} className="title gray">
          Project: A booking application for tourist visit HaLongBay of Vietnam
        </span>
      </WorkHistory>
    );
  }

  function workAtFptSoftware() {
    return (
      <WorkHistory at="FPT Software" from="Jan-2021">
        <span style={{ fontSize: body1 }} className="title gray margin-bottom14">
          return "Mobile teamlead - Currently"
        </span>
      </WorkHistory>
    );
  }

  function introduce() {
    return (<Introduce/>)
  }

  return (
    <div
      style={{ marginLeft: width > 600 ? (width - 600) * 0.3 : 0 }}
      className="row container"
    >
      <div className="column">
        <span className="dot"></span>
        <div className="line"></div>
      </div>
      <div>
        <BasicInfo />
        <div className="space"></div>
        <ShowMyCV />
        <div className="space"></div>
        {workAtTechJA()}
        <div className="space"></div>
        {workAtCooftech()}
        <div className="space"></div>
        {workAtFptSoftware()}
        <div className="space"></div>
        {introduce()}
        <div className="space"></div>
        <Skill />
        <div className="space"></div>
        <Future />
        <div className="space"></div>
        <Personal />
      </div>
    </div>
  );
}

export default Am;
