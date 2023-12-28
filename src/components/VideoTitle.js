

const VideoTitle = ({ title, overview}) => {

  return (
    <div className="pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-gray h-screen">
      <h1 className="text-2xl md:text-6xl font-bold w-1/2">{title}</h1>
      <h3 className="hidden md:inline-block py-6 text-lg w-1/4 from-neutral-50 ">{overview}</h3>
      <div className="my-4 md:m-0">
        <button className="bg-white hover:bg-opacity-50 text-black py-2 md:py-4 px-6 text-xl  rounded-lg">
          ▶️Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 hover:bg-opacity-50 text-white mx-2  p-4  px-12 text-xl  rounded-lg">
         ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
