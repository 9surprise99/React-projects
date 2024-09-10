import { memo } from "react";
import Button from "../inv/buttons/Button";
import img from "../../inc/img/q_main.png";

function Slide1(props) {
  const style = {
    backgroundImage: `url(${img})`,
    height: "320px",
    backgroundSize: "cover"
  }
  return (
    <div className="slide_quiz d-flex slide1" style={style}>
      <div className="col-50 d-flex dir-col r-gap zi-2 mob-col-100">
        <div className="slide-title-main">{props.title}</div>
        <div className="slide-txt">
          Поможем вам выбрать самое разумное за 2 минуты!
        </div>
        <Button
          txt="Начать подбор"
          clss="first-btn"
          next={props.next}
          cur={props.cur}
        />
      </div>
      <div className="col-50 mob-d-none">
        {/*<img src={img} alt="" className="slide-img" />*/}
      </div>
    </div>
  );
}
export default memo(Slide1);
