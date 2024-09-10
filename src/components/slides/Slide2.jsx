import { memo } from "react";
import Button from "../inv/buttons/Button";

function Slide2(props) {
  const slide_struc = [
    {
      title: "Инфраструктурные объекты",
      txt:
        "АЗС, Аэрокосмическая отрасль, Госструктура, армия, МЧС, Инфраструктура, ЖКХ, Логистические центры, Объекты энергетики, Системы связи и телевиденья, Строительство, Транспортные структуры"
    },
    {
      title: "Индустриальные объекты",
      txt: "Агрокомплекс, Производство"
    },
    {
      title: "Добыча нефти, газа и ископаемых",
      txt: "Горнодобывающиая отрасль, Нефтегазовая отрасль"
    },
    {
      title: "Дата-центры",
      txt: "Банковские структуры, Дата-центры(ЦОД)"
    },
    {
      title: "Социальные объекты",
      txt:
        "Гостиницы и пансионаты, Здравоохранение, Наука и образование, Офисы и бизнес-центры, Развлекательная индустрия, Спортивные объекты, Торговые центры"
    }
  ];
  return (
    <div className="slide_quiz" id="slide2">
      <div className="title">{props.title}</div>
      <div className="d-flex mob-dir-col">
        {slide_struc.map((item, index) => (
          <div
            className="col-20 slide2-col col-hover mob-col-100"
            key={index}
            onClick={props.check}
            title={item.title}
            data-id="slide2"
          >
            <div className="small-col-title">{item.title}</div>
            <div className="slide-txt">{item.txt}</div>
          </div>
        ))}
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
export default memo(Slide2);
