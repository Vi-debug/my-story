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
        What I did: Teaching hundreds of students how to code from zero
        knowledge
      </span>
      <span style={{ fontSize: body1, marginTop: 20 }} className="title gray">
        What I learned: Educational and teaching skills, Guiding freshers and
        the confidence to stand in front of dozens of people
      </span>
    </WorkHistory>
  );

  function workAtCooftech() {
    return (
      <WorkHistory at="Cooftech" from="Jan-2020" to="May-2020">
        <span style={{ fontSize: body1 }} className="title gray">
          return "Flutter devloper - Fresher"
        </span>
        <span style={{ fontSize: body1, marginTop: 20 }} className="title gray">
          Customer: TuanChau Group
        </span>
        <span style={{ fontSize: body1, marginTop: 20 }} className="title gray">
          Project: A booking application for tourist visit HaLongBay of Vietnam
        </span>
        <span style={{ fontSize: body1, marginTop: 20 }} className="title gray">
          What I learned: Building commercial application with Dart and Flutter
        </span>
      </WorkHistory>
    );
  }

  function workAtFptSoftware() {
    return (
      <WorkHistory at="FPT Software" from="Jan-2021" to="Now">
        <span
          style={{ fontSize: body1 }}
          className="title gray margin-bottom14"
        >
          return "Mobile teamlead (React Native and Flutter)"
        </span>
        <span
          style={{ fontSize: body1 }}
          className="title gray margin-bottom14"
        >
          What I did: Managing a front-end team, reviewing and maintaining
          codebase, setting up technologies, and building a mobile application
        </span>
        <span
          style={{ fontSize: body1 }}
          className="title gray margin-bottom14"
        >
          What I achived:
        </span>
        <span
          style={{ fontSize: body1, lineHeight: 1.7 }}
          className="title gray margin-bottom14"
        >
          Promoted to Dev03 level
          <br />
          Excellent Project (ePTW - 2022)
          <br />
          Platium staff (Top 5% - 2022)
        </span>
      </WorkHistory>
    );
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
        <Introduce />
        <div className="space"></div>
        <Skill />
        <div className="space"></div>
        <Future />
        <div className="space"></div>
        <Personal />
        <div className="space"></div>
      </div>
    </div>
  );
}

export default Am;
