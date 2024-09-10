export default function Button(props) {
  const txt = props.txt ? props.txt : "Далее";
  const type = props.type ? props.type : "button";
  const clss = props.clss ? props.clss : "";
  let num = "slide" + props.cur;
  let vals = props.slides ? props.slides[num].vals : [1];
  const nextSlide = () => {
    if (props.next && props.cur) {
      props.next(props.cur);
    }
  };
  return (
    <input
      type={type}
      className={"slide-btn " + clss}
      value={txt}
      onClick={nextSlide}
      disabled={vals.length > 0 ? "" : "disabled"}
    />
  );
}
