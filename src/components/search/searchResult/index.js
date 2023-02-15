import { useState } from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import Container from "../../Container";
import { Link } from "react-router-dom";

const SearchResult = () => {
  const searchResult = useSelector(state => state.searchResult?.collection?.items);
  const [showDataNumber, setShowDataNumber] = useState(6);


  return (
    <Container className={"mt-12"}>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {searchResult?.slice(0, Math.min(showDataNumber,searchResult?.length)).map((item, index) => (
          <Link
            to={`/home/detail/${index}`}
            key={item.data[0].nasa_id}
          >
            <div>
              <ImageCard data={item} />
            </div>
          </Link>
       
        ))}
      </div>
      <div className="w-full justify-center flex mt-12 mb-12">
        <button
          className="bg-blue text-white w-[150px] h-[50px] rounded-full active:bg-sky-500 hover:shadow-[#106ae0] hover:shadow-lg animate-bounce"
          onClick={() => {
            setShowDataNumber(() => showDataNumber <= searchResult.length ? showDataNumber + 6: 6);
          }}
        >
          { showDataNumber <= searchResult?.length? "Show More" : "Show Less"}
        </button>
      </div>
    </Container>
  );
};

export default SearchResult;
