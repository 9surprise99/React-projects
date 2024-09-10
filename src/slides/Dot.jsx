import {memo} from "react";
import { forwardRef } from 'react';

const Dot = forwardRef(function Dot(props,ref){
	const interval = ref;
	const next = (num)=>{
		if (interval.current){
			clearInterval(interval.current);
		}
		props.next(num);
		props.setClick(true);
		interval.current = setInterval(()=>{
			props.setTime(t=>t+1);
		},1000);
	}
	return (
		<div className={props.curPage-1 === props.num?"active dot":"dot"} onClick={()=>next(props.num)}>
		</div>
	);
});
export default Dot;