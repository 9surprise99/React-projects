import first from "../images/present_first.png";
import second from "../images/present_second.png";
import third from "../images/present_third.png";
import fourth from "../images/present_fourth.png";

const initialStore = {
	slides:[
		{
			title: <span>3000 М<sup>2</sup><br/>сервисный центр</span>,
			text: <span>Всё необходимое оборудование<br/>для сервиса и ремонта любой электростанции</span>,
			btnText: <span>Перейти к выбору электростанций</span>,
			showBtn: true,
			bgImg: first,
			page: 1,
			current: true
		},
		{
			title: <span>С 2004 года<br/>на рынке электростанций</span>,
			text: <span>Более 200 высококвалифицированных специалистов</span>,
			btnText: <span>Перейти к выбору электростанций</span>,
			showBtn: true,
			bgImg: second,
			page: 2,
			current: false
		},
		{
			title: <span>Собственное<br/>сертифицированное<br/>производство электростанций</span>,
			text: <span>Мощностной ряд 16&mdash;3300 кВА.</span>,
			btnText: <span>Перейти к выбору электростанций</span>,
			showBtn: true,
			bgImg: third,
			page: 3,
			current: false
		},
		{
			title: <span>15 000 М<sup>2</sup><br/>производственных площадей</span>,
			text: <span>Дизельные электростанции 16&mdash;3300 кВА.<br/>Контейнеры<br/>Распределительные устройства</span>,
			btnText: <span>Перейти к выбору электростанций</span>,
			showBtn: true,
			bgImg: fourth,
			page: 4,
			current: false
		}
	]
};
export default initialStore;