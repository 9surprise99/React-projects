export const addSlideInfo = (data_id, title) => {
  return {
    type: "ADD_SLIDE_INFO",
    payload: {
      data_id,
      title
    }
  };
};
export const deleteSlideInfo = (data_id, title) => {
  return {
    type: "DELETE_SLIDE_INFO",
    payload: {
      data_id,
      title
    }
  };
};
export const nextSlide = (cur) => {
  return {
    type: "NEXT_SLIDE",
    payload: {
      cur
    }
  };
};
