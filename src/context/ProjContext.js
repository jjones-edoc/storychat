import { createContext, useEffect, useState, useReducer } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export const ProjContext = createContext();

export const ProjContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId: currentUser.uid > action.payload.uid ? currentUser.uid + action.payload.uid : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return <ProjContext.Provider value={{ data: state, dispatch, currentUser }}>{children}</ProjContext.Provider>;
};
