import { useDispatch } from "react-redux";
import SelectFilter from "./SelectFilter";
import Slider from "./Slider";
import Container, { options } from "../../Container";
import { getSearchResult, setIsLoading } from "../../../store/actions";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <Container className={"py-[65px]"}>
      <div className="text-3xl font-bold">Filters</div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4 mt-4">
        {options.map((val, index) => 
          <SelectFilter option = {val} optionIndex = {index} key = {index}/>
        )}
      </div>

      <div className="mt-4 grid md:grid-cols-1 md:gap-8 gap-16">
        <Slider />
      </div>
      <div className="w-full justify-center flex mt-12">
        <button
          className="bg-blue text-white w-[150px] h-[50px] rounded-full active:bg-sky-500 hover:shadow-[#106ae0] hover:shadow-lg"
          onClick={() => {
            dispatch(setIsLoading());
            dispatch(getSearchResult());
          }}
        >Search
        </button>
      </div>
    </Container>
  );
};

export default Filter;
