const ImageCard = ({ data }) => {
  return (
    <div className="w-full shadow-xl shadow-blue-500/50">
      <div className="w-full h-[250px] relative pointer overflow-hidden">
        <img src={data.links[0].href} />
      </div>
      <div className="p-4">
        <div className="text-xl">{data?.data[0]?.title}</div>
        <div className="text-blue text-xl">{data?.data[0]?.nasa_id}</div>
        <div className="mt-2">{data?.data[0]?.location}</div>
        <div className="mt-2">{data?.data[0]?.photographer}</div>
      </div>
    </div>
  );
};

export default ImageCard;
