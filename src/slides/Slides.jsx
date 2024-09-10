import { useState,useEffect,useRef } from "react";
import { SwitchTransition,CSSTransition } from 'react-transition-group';
import { nextSlide } from "../store/actions";
import { connect, useSelector} from "react-redux";
import Slide from "./Slide";

function Slides(props){
	const slides = props.state.slides;
	const [click, setClick] = useState(false);
	const [time, setTime] = useState(0);
	const interval = useRef(null);
	const countOfPages = slides.length;
	const current = useSelector(state => state.slides.filter((item)=>item.current === true)[0].page);
	const nextSlide = (cur)=>{
		props.nextSlide(cur);
	}
	const nodeRef = useRef(null);
	useEffect(()=>{
		if (!click){
			let id = setInterval(()=>{
				nextSlide(current);
			},3000);
			return ()=>clearInterval(id);
		}else{
			if (time === 10){
				setClick(false);
				setTime(0);
				clearInterval(interval.current);
				interval.current = null;
			}

		}
	},[current,time,click]);
	const ref = {nodeRef:nodeRef,interval:interval};
	return (
		<div className="slides">
			<SwitchTransition mode="in-out">
				<CSSTransition timeout={{appear:0,enter:500,exit:0}} classNames='fade' key={current} nodeRef={nodeRef}>
					<Slide 
						data={slides.filter((item)=>item.current === true)} 
						next={nextSlide} 
						current={current} 
						ref={ref} 
						setClick={setClick} 
						setTime={setTime}
					/>
				</CSSTransition>
			</SwitchTransition>
		</div>
			
	);
}

const mapStateToProps = (state) => {
  return { state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    nextSlide: (cur) => dispatch(nextSlide(cur))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Slides);