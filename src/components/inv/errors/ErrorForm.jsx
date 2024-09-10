import { memo } from "react";

function ErrorForm(props) {
  let title = props.id;
  return <div className="err-field">{props.err[title]}</div>;
}
export default memo(ErrorForm);
