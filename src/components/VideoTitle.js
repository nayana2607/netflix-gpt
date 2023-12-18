const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-72 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <h3 className="py-3 w-1/2 from-neutral-50">{overview}</h3>
      <div className="">
        <button className="bg-white-500 text-black mx-2 p-4 px-16 text-xl bg-opacity-50 rounded-lg">
          ▶️Play
        </button>
        <button className="bg-gray-500 text-white mx-2  p-4  px-12 text-xl bg-opacity-100 rounded-lg">
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
