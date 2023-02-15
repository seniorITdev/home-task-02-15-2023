import ReactLoading from "react-loading";

const Loading = ( ) => {
    return (
        <div className="w-full flex justify-center text-center min-h-[300px]">
            <ReactLoading type={"spinningBubbles"} color="#004DFF" />
        </div>
    )
}

export default Loading