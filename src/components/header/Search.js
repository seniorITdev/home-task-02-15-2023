import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchImage from "../../assets/icons/Search.png";
import { getSearchResult, storeSearchItems, setIsLoading } from "../../store/actions";
import { options, optionsKey } from "../Container";

const Search = () => {
  const [status, setStatus] = useState(0);
  const [value, setValue] = useState("image");
  const dispatch = useDispatch();
  const searchItem = useSelector(state => state.searchItem);
  const navigate = useNavigate();
  const regex = /^[a-zA-Z0-9 ]{0,}$/;

  useEffect(() => {
    setValue(searchItem[optionsKey[status]])
  }, [searchItem])

  return (
  <>
    <div className="mt-10 md:bg-white md:flex md:w-3/5 w-4/5 md:h-[50px] md:rounded-[10px] overflow-hidden">
      <select
        className="outline-none md:w-1/3 px-4 w-full h-[50px] md:h-auto md:rounded-0 rounded-[10px]"
        onChange={(e) => {
          setStatus(e.target.value);
          setValue(searchItem[optionsKey[e.target.value]]);
        }}
      >
        {options.map((val, key) => (
          <option value={key} key={key}>
            {val}
          </option>
        ))}
      </select>
      <div className={`w-full flex items-center relative md:px-8 px-4 bg-white md:bg-transparent h-[50px] md:h-auto md:rounded-0 rounded-[10px] md:mt-0 mt-4 ${!value.match(regex) && "border-2 border-rose-600"}`}>
        <img src={SearchImage} width={"30px"} height={"30px"} />
        <input
          type="text"
          className="w-full outline-none px-2"
          placeholder="Search for queries or keywords..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch(setIsLoading());
              dispatch(getSearchResult());
              navigate("/home/search");
            }
          }}
          onChange = {(e) => {
            setValue(e.target.value);
            dispatch(storeSearchItems(optionsKey[status], e.target.value));
          }}
          disabled = {status == 0}
          value = {value}
          style = {{color: status == 0? "grey": "black"}}
          pattern={"^[A-Za-z0-9]{1,}$"}
        />
      </div>
    </div>
    </>
  );
};

export default Search;
