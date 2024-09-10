import Dot from "./Dot";
import { forwardRef } from 'react';

const Slide = forwardRef(function Slide(props,ref){
	const slide = props.data[0];
	const {nodeRef,interval} = ref;
	const style = {
		backgroundImage: `url(${slide.bgImg})`,
		height: 350,
		backgroundSize: 'cover',
		backgroundRepeate: 'no-repeate',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
	let dots = [];
	for (let i=0;i<4;i++){
		dots.push(<Dot key={i} next={props.next} num={i} curPage={+slide.page} setClick={props.setClick} ref={interval} setTime={props.setTime}/>)
	}
	const next = (e)=>{
		if (!e.target.classList.value.includes('dot')){
			if (interval.current){
				clearInterval(interval.current);
			}
			props.next(slide.page);
			props.setClick(true);
			interval.current = setInterval(()=>{
				props.setTime(t=>t+1);
			},1000)
		}
	}
	const toCatalog = (e)=>{
		e.stopPropagation();
	}
	return (
		<div className="slide" style={style} onClick={next} ref={nodeRef}>
			<div className="slide-block">
				<div className="slide-title">{slide.title}</div>
				<div className="slide-text">{slide.text}</div>
				<div className="slide-btn" onClick={toCatalog}><a href="#deisel_catalog">{slide.btnText}</a></div>
			</div>
			<div className="slide-dots">
				{dots}
			</div>
		</div>
	);
});
export default Slide;