import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestionContainer from "./GPTSuggestionContainer";

const GPTSearchPage = () => {
  return (
    <>
    <div className="fixed -z-10">
    <img
      className="brightness-50 h-screen w-screen object-cover"
      src="https://assets.nflxext.com/ffe/siteui/vlv3/ab4b0b22-2ddf-4d48-ae88-c201ae0267e2/0efe6360-4f6d-4b10-beb6-81e0762cfe81/IN-en-20231030-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      alt="back-ground-img"
    />
  </div>
    <div>
     
      <GPTSearchBar />
      <GPTSuggestionContainer />
    </div></>
    
  );
};

export default GPTSearchPage;
