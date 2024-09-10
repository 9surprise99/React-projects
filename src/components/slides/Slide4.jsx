import { memo } from "react";
import Button from "../inv/buttons/Button";
import mtu from "../../inc/img/mtu.png";
import baudoin from "../../inc/img/baudouin.png";
import cummins from "../../inc/img/cummins.png";
import doosan from "../../inc/img/doosan.png";
import iveco from "../../inc/img/iveco.png";
import johndeere from "../../inc/img/johndeere.png";
import mitsubishi from "../../inc/img/mitsubishi.png";
import perkins from "../../inc/img/perkins.png";
import scania from "../../inc/img/scania.png";
import volvo from "../../inc/img/volvo.png";
import volvoBig from "../../inc/img/volvo-big.png";
import mitsubishiBig from "../../inc/img/mitsubishi-big.png";
import mtuBig from "../../inc/img/mtu-big.png";
import cumminsBig from "../../inc/img/cummins-big.png";

function Slide4(props) {
  const main = [
    {
      col: {
        col_size: "col-60",
        col: "left-col",
        title: "Двигатели основной и резервной работы",
        engs: [
          {
            col: [
              { eng: "mtu", countries: "Германия, Китай", img: mtuBig},
              { eng: "mitsubishi", countries: "Япония, Франция", img: mitsubishiBig },
              { eng: "cummins", countries: "Китай, Индия, Великобритания", img: cumminsBig},
              { eng: "volvo_penta", countries: "Швеция", img:volvoBig }  
            ]
          },
        ],
        flag: 'main'
      }
    },
    {
      col: {
        col_size: "col-26",
        col: "right-col",
        title: "Только для резервной работы",
        engs: [
          {
            col: [
              { eng: "doosan", countries: "Южная Корея", img: doosan },
              { eng: "baudoin", countries: "Китай", img: baudoin },
              { eng: "iveco", countries: "Италия", img: iveco },  
            ],
          },
          {
            col: [
              { eng: "perkins", countries: "Индия, Китай", img: perkins },
              { eng: "scania", countries: "Швеция", img: scania },
              { eng: "john_deere", countries: "Франция", img: johndeere }
            ],
          }
        ],
        flag: 'rez'
      }
    }
  ];
  const rez = [
    {
      col: {
        col_size: "col-50",
        col: "left-col",
        title: <>Двигатели, подходящие<br/>только для резервной работы</>,
        engs: [
          { eng: "doosan", countries: "Южная Корея", img: doosan },
          { eng: "baudoin", countries: "Китай", img: baudoin },
          { eng: "iveco", countries: "Италия", img: iveco },
          { eng: "perkins", countries: "Индия, Китай", img: perkins },
          { eng: "scania", countries: "Швеция", img: scania },
          { eng: "john_deere", countries: "Франция", img: johndeere }
        ]
      }
    },
    {
      col: {
        col_size: "col-40",
        col: "right-col",
        title: <>Двигатели, подходящие и для резервной,<br/>и для основной работы</>,
        engs: [
          { eng: "mtu", countries: "Германия, Китай", img: mtu},
          { eng: "mitsubishi", countries: "Япония, Франция", img: mitsubishi },
          { eng: "cummins", countries: "Китай, Индия, Великобритания", img: cummins},
          { eng: "volvo_penta", countries: "Швеция", img:volvo }
        ]
      }
    }
  ];
  const flag = props.slides.slide3.vals.includes("Основная работа") ? 'main' : 'rez';
  const click = (e) => {
    if (e.currentTarget.classList.value.includes('checked')){
      e.currentTarget.children[0].checked = false;
    }else{
      e.currentTarget.children[0].checked = true;  
    }
    const input = e.currentTarget.children[0];
    props.check(input)
  }
  return (
    <div className="slide_quiz" id="slide4">
      <div className="title">{props.title}</div>
      {
        flag === 'rez' ?
        <div className="d-flex justify-space-between mob-dir-col">
          {rez.map((item, index) => (
            <div
              className={
                "txt-center d-flex dir-col justify-center align-center mob-col-100 " +
                item.col.col_size + " " + item.col.col
              }
              key={index}
            >
              <div className="small-col-title">{item.col.title}</div>
              <div className="engs d-flex w100 justify-space-between align-baseline mob-wrap">
                {item.col.engs.map((items, index) => (
                  <div className="col-item d-flex dir-col align-center justify-space-between h100 padding-5 mob-basis-30" key={index} onClick={click}>
                    <input
                      type="checkbox"
                      value={items.eng}
                      data-id="slide4"
                      title={items.eng}
                    />
                    <img src={items.img} alt=""/>
                    <div className="col-countries">{items.countries}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        :
        <div className="d-flex justify-space-between mob-dir-col">
          {main.map((item,index) => (
            <div className={"txt-center d-flex dir-col justify-center align-center mob-col-100 " + item.col.col_size + " "+ item.col.col} key={index}>
              <div className="small-col-title">{item.col.title}</div>
              <div className="d-flex w100 h100 justify-space-between">
                {item.col.engs.map((it, index) => (
                  <div key={index} className={"engs d-flex h100 " + (item.col.flag==='rez' ? "dir-col align-center" : "w100 justify-space-between mob-wrap")}>
                    {it.col.map((items,index)=>(
                      <div className={"col-item d-flex align-center h100 " + (item.col.flag==='main' ? "dir-col justify-space-around" : "")} key={index} onClick={click}>
                        <input
                          type="checkbox"
                          value={items.eng}
                          data-id="slide4"
                          title={items.eng}
                        />
                        <img src={items.img} alt="" />
                      </div>  
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      }
      <div className="engs d-flex h100 justify-center">
        <div className="col-item d-flex align-center h100 f-s-22" onClick={click}>
          <input
            type="checkbox"
            value="Не знаю"
            data-id="slide4"
            title="Не знаю"
          />
          <div className="col-countries">Не знаю</div>
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
export default memo(Slide4);
