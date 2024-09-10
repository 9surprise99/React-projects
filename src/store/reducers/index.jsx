import initialStore from "../initialStore";

export default function reducer(state = initialStore, action) {
  switch (action.type) {
    case "ADD_SLIDE_INFO": {
      let data_id = action.payload.data_id;
      let title = action.payload.title;
      return {
        ...state,
        slides: {
          ...state.slides,
          [data_id]: {
            title: state.slides[data_id].title,
            vals: [
              ...state.slides[data_id].vals.filter((item) => item !== title),
              title
            ]
          }
        }
      };
    }
    case "DELETE_SLIDE_INFO": {
      let data_id = action.payload.data_id;
      let title = action.payload.title;
      return {
        ...state,
        slides: {
          ...state.slides,
          [data_id]: {
            title: state.slides[data_id].title,
            vals: [
              ...state.slides[data_id].vals.filter((item) => item !== title)
            ]
          }
        }
      };
    }
    case "NEXT_SLIDE": {
      let cur = action.payload.cur;
      return {
        ...state,
        slideInfo: {
          total: 6,
          current: cur !== state.slideInfo.total ? cur + 1 : 1,
          next: cur !== state.slideInfo.total ? cur + 2 : 1,
          prev: cur !== state.slideInfo.total ? cur : 1
        }
      };
    }
    default:
      return state;
  }
}
