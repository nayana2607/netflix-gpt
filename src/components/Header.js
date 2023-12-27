import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from "../utils/userSlice";
import { clearSlice, toggleGPTSearchView } from "../utils/gptSlice";
import { supportedLanguages } from "../utils/constants";
import { changeLanguage } from "../utils/appConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const toogleGPTButton = useSelector((store) => store.gpt.showSearch);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // ...
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("error");
      });
  };

  const handleGPTSearch = (e) => {
    if(e.target.innerHTML==='Home Page')dispatch(clearSlice());
    dispatch(toggleGPTSearchView());

  };

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-gray z-10">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2">
          {toogleGPTButton && (
            <select
              className="p-2 m-2 bg-gray-800 text-white"
              onChange={handleChange}
            >
              {supportedLanguages.map((item) => (
                <option key={item.identifier} value={item.identifier}>
                  {item.language}
                </option>
              ))}
            </select>
          ) }
        
            <button
              className=" px-4 m-2 bg-purple-500 text-white rounded-md"
              onClick={handleGPTSearch}
            >
             {toogleGPTButton?"Home Page": "🔍GPT Search"}
            </button>
          

          <img className="w-12 h-12" src={user.photoURL} alt="user-icon" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
