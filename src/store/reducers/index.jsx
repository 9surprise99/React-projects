import initialStore from "../initialStore.jsx";

export default function reducer(state = initialStore, action){
	switch(action.type){
		case "NEXT_SLIDE":{
			let cur = +action.payload.cur;
			cur = cur === 4? 1: cur+1;
			return {
				...state,
				...state.slides.map((item)=>{
					if (item.current === true) item.current = false;
					if (item.page === cur) item.current = true;
					return item;
				})
			}
		}
		default: 
			return state;
	}
}