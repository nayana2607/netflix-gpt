

const VideoTitle = ({ title, overview}) => {

  return (
    <div className="pt-[10%] px-12 absolute text-white bg-gradient-to-r from-gray h-screen">
      <h1 className="text-6xl font-bold w-1/2">{title}</h1>
      <h3 className="py-3 w-1/4 from-neutral-50 ">{overview}</h3>
      <div className="">
        <button className="bg-white hover:bg-opacity-50 text-black mx-2 p-4 px-16 text-xl  rounded-lg">
          ▶️Play
        </button>
        <button className="bg-gray-500 hover:bg-opacity-50 text-white mx-2  p-4  px-12 text-xl  rounded-lg">
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
