import { memo } from "react";
import Form from "../inv/forms/Form";

function Slide6(props) {
  return (
    <div className="slide_quiz txt-center" id="slide6">
      <div className="title w48 margin-0-auto margin-b-20 mob-col-100">{props.title}</div>
      <div className="slide-txt margin-b-20">
        Чтобы получить подборку - оставьте свои контакты и мы сразу пришлем вам
        подходящие варианты
      </div>
      <Form data={props.slides} cok={props.cok} setCok={props.setCok}/>
      <div className="txt margin-top-20">
        А пока отправляется вы можете посмотреть наш <a href="/diesel.php">каталог</a>
      </div>
    </div>
  );
}
export default memo(Slide6);
