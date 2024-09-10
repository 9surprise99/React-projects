import { useEffect, useState } from "react";
import { addSlideInfo, deleteSlideInfo, nextSlide } from "../../store/actions";
import { connect } from "react-redux";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";

function Slides(props) {
  const cur = props.state.slideInfo.current;
  const nextSlide = (cur) => props.nextSlide(cur);
  const addSlideInfo = (data_id, title) => props.addSlideInfo(data_id, title);
  const deleteSlideInfo = (data_id, title) =>
    props.deleteSlideInfo(data_id, title);
  const check = (e) => {
    let _this = e.currentTarget ? e.currentTarget : e;
    let title = _this.title;
    let data_id = _this.dataset.id;
    if (_this.classList.value.includes("checked")) {
      _this.classList.remove("checked");
      _this.parentElement.classList.remove("checked");
      deleteSlideInfo(data_id, title);
    } else {
      _this.classList.add("checked");
      _this.parentElement.classList.add("checked");
      addSlideInfo(data_id, title);
      if (data_id === "slide3") {
        let sibling = _this.nextSibling
          ? _this.nextSibling
          : _this.previousSibling;
        if (sibling && sibling.classList.value.includes("checked")) {
          sibling.classList.remove("checked");
          deleteSlideInfo(sibling.dataset.id, sibling.title);
        }
      }
    }
  };
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : '';
  }
  const [cok, setCok] = useState(getCookie('quiz'));
  return (
    <div className="slides">
      {cur === 1 && cok === '' ? (
        <Slide1
          title="Гид в мире дизель-генераторов"
          cur={cur}
          check={check}
          next={nextSlide}
        />
      ) : cur === 2 && cok === '' ? (
        <Slide2
          title="В какой отрасли нужен генератор?"
          cur={cur}
          check={check}
          next={nextSlide}
          slides={props.state.slides}
        />
      ) : cur === 3 && cok === ''? (
        <Slide3
          title="Какой тип работы генератора вам нужен?"
          cur={cur}
          check={check}
          next={nextSlide}
          slides={props.state.slides}
        />
      ) : cur === 4 && cok === '' ? (
        <Slide4
          title="На базе какого двигателя вам нужен генератор?"
          cur={cur}
          check={check}
          next={nextSlide}
          slides={props.state.slides}
        />
      ) : cur === 5 && cok === '' ? (
        <Slide5
          title="Выберите необходимую вам мощность"
          cur={cur}
          check={check}
          next={nextSlide}
          slides={props.state.slides}
        />
      ) : cur === 6 && cok === '' ? (
        <Slide6
          title="Мы уже знаем какие электростанции будут для вас самым разумным выбором"
          cur={cur}
          check={check}
          next={nextSlide}
          slides={props.state.slides}
          cok={cok}
          setCok={setCok}
        />
      ) : cok === 'complete' ? (
        <Slide7 />
      ):(
      ""
      )}
      <div className="closeQuiz">X</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addSlideInfo: (data_id, title) => dispatch(addSlideInfo(data_id, title)),
    deleteSlideInfo: (data_id, title) =>
      dispatch(deleteSlideInfo(data_id, title)),
    nextSlide: (data_id, title) => dispatch(nextSlide(data_id, title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slides);
