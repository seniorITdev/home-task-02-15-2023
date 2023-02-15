import Filter from "./filter";
import SearchResult from "./searchResult"; 
import Loading from "../Loading";
import { useSelector } from "react-redux";
const SearchPage = () => {
    const isLoading = useSelector(state => state.isLoading);
    return (<>
        <Filter />
        {isLoading? <Loading /> : <SearchResult />}
    </>)
}

export default SearchPage