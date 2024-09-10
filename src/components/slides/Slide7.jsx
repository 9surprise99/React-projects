import { memo } from "react";

function Slide7(props){
	return(
		<div className="slide_quiz txt-center" id="slide7">
			<p className="font-20">Спасибо, мы приняли вашу заявку.</p>
			<p>Наши менеджеры свяжутся с вами в ближайшее время.</p>
		</div>
	);
}
export default memo(Slide7);