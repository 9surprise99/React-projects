export const nextSlide = (cur) => {
	return {
		type: "NEXT_SLIDE",
		payload: {
			cur
		}
	}
}