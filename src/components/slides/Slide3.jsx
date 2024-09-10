import { memo } from "react";
import Button from "../inv/buttons/Button";

function Slide3(props) {
  return (
    <div className="slide_quiz" id="slide3">
      <div className="title">{props.title}</div>
      <div className="col-40 justify-center d-flex margin-0-auto mob-col-100 mob-dir-col">
        <div
          className="col-50 slide3-col col-hover mob-col-100"
          onClick={props.check}
          title="Основная работа"
          data-id="slide3"
        >
          <div className="small-col-title">Основная работа</div>
          <div className="slide-txt">
            в непрерывном режиме при переменной нагрузке неограниченное
            количество часов в год
          </div>
        </div>
        <div
          className="col-50 slide3-col col-hover mob-col-100"
          onClick={props.check}
          title="Резервная работа"
          data-id="slide3"
        >
          <div className="small-col-title">Резервная&nbsp;работа</div>
          <div className="slide-txt">
            для аварийного использования при переменной нагрузке не более 5
            часов в сутки
          </div>
        </div>
      </div>
      <Button
        clss="next-btn"
        cur={props.cur}
        next={props.next}
        slides={props.slides}
      />
    </div>
  );
}
export default memo(Slide3);
