import { useContext } from "react";
import { FontSizeContext } from "../../../global-hook/context/font-size";

export interface IWorkHistory {
  at: String;
  from: String;
  to?: String;
  children: JSX.Element[] | JSX.Element;
}

const WorkHistory = (props: IWorkHistory) => {
  const { heading1, title2, body1 } = useContext(FontSizeContext);
  const { at, from, to } = props;

  return (
    <div className="column word-break">
      <span
        style={{ fontSize: heading1 }}
        className="heading white-color margin-bottom14"
      >
        work(from:
        <span style={{ fontSize: heading1 }} className="heading main-color">
          {from}
        </span>
        {to ? ",to:" : null}
        <span style={{ fontSize: heading1 }} className="heading main-color">
          {to}
        </span>
        ,at:
        <span style={{ fontSize: heading1 }} className="heading main-color">
          {at}
        </span>
        )
      </span>
      {props.children}
    </div>
  );
};

export default WorkHistory;
