import { memo, useState } from "react";
import Button from "../inv/buttons/Button";

function Slide5(props) {
  const power = [
    {
      id: "kw",
      units: "кВт",
      vals: [
        5,
        6,
        8,
        9,
        12,
        13,
        16,
        20,
        24,
        32,
        40,
        50,
        56,
        64,
        80,
        100,
        110,
        120,
        130,
        150,
        160,
        180,
        200,
        220,
        240,
        280,
        300,
        320,
        330,
        360,
        400,
        450,
        500,
        550,
        600,
        640,
        720,
        800,
        900,
        1000,
        1100,
        1200,
        1400,
        1500,
        1600,
        1800,
        1900,
        2000,
        2200,
        2400,
        2600,
        2800,
        3000,
        3200
      ]
    },
    {
      id: "kva",
      units: "кВА",
      vals: [
        6,
        8,
        10,
        11,
        15,
        16,
        20,
        25,
        30,
        40,
        50,
        60,
        70,
        80,
        100,
        125,
        135,
        150,
        160,
        180,
        200,
        230,
        250,
        280,
        300,
        360,
        375,
        400,
        410,
        450,
        500,
        570,
        640,
        700,
        750,
        800,
        900,
        1000,
        1100,
        1250,
        1400,
        1500,
        1700,
        1900,
        2000,
        2250,
        2400,
        2500,
        2800,
        3000,
        3300,
        3500,
        3800,
        4000
      ]
    }
  ];
  const [active, setActive] = useState("kw");
  const showTab = (e) => {
    let id = e.target.id;
    power.map((item) => {
      if (item.id === id) {
        setActive(item.id);
        checked(e, id);
      }
    });
  };
  const checked = (e, id) => {
    if (id) {
      let last = document.getElementsByClassName("checked-head")[0];
      last.classList.remove("checked-head");
      e.target.classList.add("checked-head");
    }
  };
  return (
    <div className="slide_quiz" id="slide5">
      <div className="title">{props.title}</div>
      <div className="tabs">
        <div className="tabs-head d-flex gap3 margin-b-5">
          <div
            className={"tab-title tabs-item checked-head"}
            id="kw"
            onClick={(e) => {
              showTab(e);
            }}
          >
            кВт
          </div>
          <div
            className="tab-title tabs-item"
            id="kva"
            onClick={(e) => {
              showTab(e);
            }}
          >
            кВА
          </div>
        </div>
        <div className="tabs-body d-flex flex-wrap gap3">
          {power.map((item) =>
            item.id === active
              ? item.vals.map((items, index) => (
                  <div
                    className="items tabs-item"
                    key={index}
                    onClick={props.check}
                    title={items + " " + item.units}
                    data-id="slide5"
                  >
                    {items + " " + item.units}
                  </div>
                ))
              : ""
          )}
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
export default memo(Slide5);
