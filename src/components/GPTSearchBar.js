import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
  const selectedLanguage=useSelector(store=>store.appConfig.lang)
  return (
    <div className="flex justify-center pt-[10%]">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-2 col-span-9 rounded-md"
          type="text"
          placeholder={lang[selectedLanguage].placeholder}
        />
        <button className="p-4 m-2 col-span-3 bg-red-500 text-white rounded-md">
        {lang[selectedLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
