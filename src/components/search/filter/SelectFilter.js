import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearchResult, setIsLoading, storeSearchItems } from "../../../store/actions";
import SearchImage from "../../../assets/icons/Search.png";
import { optionsKey } from "../../Container";

const SelectFilter = ({option, optionIndex}) => {
  const searchItem = useSelector(state => state.searchItem);
  const [value, setValue] = useState(searchItem[optionsKey[optionIndex]]);
  const dispatch = useDispatch();
  const regex = /^[a-zA-Z0-9 ]{0,}$/;

  useEffect(() => {
    setValue(searchItem[optionsKey[optionIndex]]);
  }, [searchItem[optionsKey[optionIndex]]])
  
  return (
    <>
      <div className={ `border border-filter px-4 rounded-[10px] ${!value.match(regex) && "border-2 border-rose-600"}`} >
        <div className="flex items-center border-b-2 border-grey-300">
          <img src={SearchImage} width={"30px"} height={"30px"} />
          <div className={`text-1xl font-bold ${!value.match(regex) && "text-rose-600"}`}>{value.match(regex) ? option : "NO VALID!"}</div>
        </div>
        <input
          type="text"
          className="outline-none h-[50px] w-full"
          placeholder={"Search " + option}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setIsLoading());
              dispatch(getSearchResult());
            }
          }}
          onChange = {(e) => {
            setValue(e.target.value);
            dispatch(storeSearchItems(optionsKey[optionIndex], e.target.value));
          }}
          disabled = {optionIndex == 0}
          value = {value}
        />
      </div>
    </>
  );
};

export default SelectFilter;
