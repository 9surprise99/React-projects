import { useState } from "react";
import Button from "../buttons/Button";
import ErrorForm from "../errors/ErrorForm";
import axios from 'axios';

export default function Form(props) {
  const [err, setErr] = useState({});
  const errors = {
    name: "Неправильно введенно имя\r\n(нужно минимум 2 символа)",
    tel: "Неправильно введен телефон",
    email: "Неправильно введен email"
  };
  const validatePhone = (e, errors) => {
    let value = e.target.value;
    value = value.replace(/^8(.*)/gi, "+7$1");
    value = value.replace(/^7(.*)/gi, "+7$1");
    value = value.replace(/^([01234569].*)/gi, "+7$1");

    value = value.replace(/([^\+0-9]+)/gi, "");

    value = value.replace(
      /^\\+7([0-9]{3})([0-9]{3})([0-9]{2})([0-9]+)/gi,
      "+7 ($1) $2-$3-$4"
    );
    value = value.replace(
      /^\\+7([0-9]{3})([0-9]{3})([0-9]+)/gi,
      "+7 ($1) $2-$3"
    );
    value = value.replace(/^\\+7([0-9]{3})([0-9]+)/gi, "+7 ($1) $2");
    let mask = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
    if (value !== "") {
      if (value.match(mask)) {
        e.target.value = value;
        setErr({ ...err, tel: "" });
        return true;
      } else {
        e.target.value = value;
        setErr({ ...err, tel: errors.tel });
      }
    } else {
      setErr({ ...err, tel: errors.tel });
    }
  };
  const validate = (type, value, errors) => {
    let { name, tel, email } = errors;
    switch (type) {
      case "text": {
        let mask = /^[^\s][A-Za-zА-яа-я\s]{2,}$/;
        if (value !== "") {
          if (value.match(mask)) {
            setErr({ ...err, name: "" });
            return true;
          } else {
            setErr({ ...err, name });
          }
        } else {
          setErr({ ...err, name });
        }

        break;
      }
      case "tel": {
        let mask = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
        if (value !== "") {
          if (value.match(mask)) {
            setErr({ ...err, tel: "" });
            return true;
          } else {
            setErr({ ...err, tel });
          }
        } else {
          setErr({ ...err, tel });
        }

        break;
      }
      case "email": {
        let mask = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
        if (value !== "") {
          if (value.match(mask)) {
            setErr({ ...err, email: "" });
            return true;
          } else {
            setErr({ ...err, email });
          }
        } else {
          setErr({ ...err, email });
        }
        break;
      }
      default:
        break;
    }
  };
  const checkField = (el, errors) => {
    let type = el.type;
    let value = el.value;
    if (validate(type, value, errors)) {
      return true;
    } else {
      return false;
    }
  };
  const sendForm = async (e, errors) => {
    e.preventDefault();
    let filedsStatus = {};
    let _this = e.target;
    let elems = {
      name: _this.elements.name.value ? _this.elements.name : "",
      phone: _this.elements.phone.value ? _this.elements.phone : "",
      email: _this.elements.email.value ? _this.elements.email : ""
    };
    let bigData = props.data;
    bigData.formField = {};
    for (let field in elems) {
      if (elems[field]) {
        if (checkField(elems[field], errors)) {
          filedsStatus[field] = true
        } else {
          filedsStatus[field] = false;
          setErr({ ...err });
        }
      }
      bigData.formField[field] = elems[field].value;
    }
    let dt = JSON.stringify(bigData);
    if (filedsStatus.name === true && filedsStatus.phone === true) {
      await axios
        .post("https://www.grandmotors.ru/ajax/react_quiz.php", dt, {
          headers: {
            "Content-type": "application/json",
           }
        })
        .then((response) => {
          if (response.status === 200) {
            return response.data;
          }
        })
        .then((result) => {
          if (result.status === "OK"){
            console.log('success');
            document.cookie = "quiz=complete; max-age: 86400";
            props.setCok("complete");
          }else{
            throw new Error();
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <form onSubmit={(e) => sendForm(e, errors)} className="quiz_form">
      <div className="fields d-flex margin-b-20 justify-center col-gap20 mob-dir-col">
        <div className="form-field">
          <input
            type="text"
            placeholder="Имя"
            className="name txt-center"
            name="name"
            required
            onChange={(e) => validate(e.target.type, e.target.value, errors)}
          />
          <ErrorForm err={err} id="name" />
        </div>
        <div className="form-field">
          <input
            type="tel"
            className="phone txt-center"
            name="phone"
            placeholder="Телефон"
            required
            onChange={(e) => validatePhone(e, errors)}
            onInput={(e)=> validatePhone(e, errors)}
            maxLength="12"
          />
          <ErrorForm err={err} id="tel" />
        </div>
        <div className="form-field">
          <input
            type="email"
            className="email txt-center"
            name="email"
            placeholder="E-mail"
            onChange={(e) => validate(e.target.type, e.target.value, errors)}
          />
          <ErrorForm err={err} id="email" />
        </div>
      </div>
      <Button type="submit" txt="Отправить" />
    </form>
  );
}
