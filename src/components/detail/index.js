import { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Container from '../Container';
import Loading from "../Loading";
import { getImagesForItem, getSearchResult, setIsLoading } from "../../store/actions";

const Detail = () => {
    const { id } = useParams();
    const searchResult = useSelector(state => state.searchResult?.collection?.items[id]);
    const images = useSelector(state => state.imagesForItem);
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = searchResult?.data[0];

    useEffect(() => {
        if(!searchResult){ dispatch(setIsLoading()); dispatch(getSearchResult());}
        if(searchResult) { dispatch(setIsLoading()); dispatch(getImagesForItem(searchResult?.href));}
    }, [searchResult?.href])

    return (
        <>
        {isLoading? <Loading /> : <div className="w-full my-4">
            <Container className={"flex items-center h-full grid md:grid-cols-2 md:gap-8 gap-4"}>
                {images?.map((url, index) => 
                <div key = {index} className="bg-white p-8 rounded-[5px] shadow-blue shadow-lg">
                    <img src={url} className="w-full object-contain" />
                </div>)}
                <div className="bg-white p-8 rounded-[5px] shadow-blue shadow-lg">
                    <div className="bg-status inline-flex text-white px-2 rounded-[5px] mb-4">
                        Over Here To See Images
                    </div>
                    <div className="text-xl">{data?.title}</div>
                    <div className="text-blue text-xl">{data?.nasa_id}</div>
                    <div className="mt-2"><span className="font-bold">Location:</span> {data?.location}</div>
                    <div className="mt-2"><span className="font-bold">Photographer:</span> {data?.photographer}</div>
                    <div className="mt-2"><span className="font-bold">Description:</span> {data?.description}</div>
                    <div className="mt-2"><span className="font-bold">Keywords:</span> {data?.keywords?.join(" ")}</div>
                    <div className="mt-2"><span className="font-bold">Date:</span> {(new Date(data?.date_created)).toLocaleString()}</div>
                </div>
            </Container>
            <div className="w-full justify-center flex mt-12">
                <button
                className="bg-blue text-white w-[150px] h-[50px] rounded-full active:bg-sky-500 hover:shadow-[#106ae0] hover:shadow-lg"
                onClick={() => { navigate(-1); }}
                >Go to Search Page
                </button>
            </div>
        </div>}   
        </>
    )
}

export default Detail