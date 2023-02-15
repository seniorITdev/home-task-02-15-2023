import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { storeSearchItems, getSearchResult, setIsLoading } from "../../../store/actions";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import '../../../styles/slider.css';

const Slider = () => {
  const dispatch = useDispatch();
  let slider = useRef();
  const thisYear = (new Date()).getFullYear();

  useEffect(() => {
    if (slider.current && slider.current.noUiSlider) {
      slider.current.noUiSlider.destroy();
    }
    noUiSlider.create(slider.current, {
      range: {
        min: 1901,
        max: thisYear,
      },
      start: [1961, thisYear],
      connect: [false, true, false],
      tooltips:[true, true],
      format: {
        from: Number,
        to: function(value) {
            return (parseInt(value)+"");
        }
      },
      step: 1,
    });
  }, []);

  useEffect(() => {
    slider.current.noUiSlider.on("end", (val) => {
      dispatch(storeSearchItems("yearStart", val[0]));
      dispatch(storeSearchItems("yearEnd", val[1]));
      dispatch(setIsLoading());
      dispatch(getSearchResult());
    });
  });
  return (
    <div>
      <div className="text-2xl font-bold">Start And End Year</div>
      <div ref={slider} className="mt-8"></div>
    </div>
  );
};

export default Slider;
