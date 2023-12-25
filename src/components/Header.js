import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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
      .then(() => { })
      .catch((error) => {
        navigate("error");
      });
  };
  return (
    <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-gray z-10">
      <img
        className="w-44 p-3 m-3"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
        <div className="flex p-2">
          <span>
            <img className="w-12 h-12" src={user.photoURL} alt="user-icon" />
            <button className="font-bold text-white" onClick={handleSignOut}>
              Sign Out
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
