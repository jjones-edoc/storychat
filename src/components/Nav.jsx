import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Conversations from "./conversations_cp/Conversations";
const Nav = () => {
  const [conversations, setConversations] = useState([]);
  const handleNewConversation = () => {
    setConversations([...conversations, { id: 1, name: "New Conversation", messages: [] }]);
    console.log(conversations);
  };
  return (
    <div className="col-3 bg-dark h-100 d-flex flex-column">
      <div className="row p-2" onClick={handleNewConversation}>
        <button className="btn btn-success w-100 d-flex align-items-center">
          <i className="fa fa-plus pt-2" style={{ width: "25px" }}></i>
          <span className="ms-2 fs-3">New Conversation</span>
        </button>
      </div>
      {/* Add a search for a conversation */}
      <div className="row p-2 position-relative">
        <input type="text" className="form-control" placeholder="Search For..." />
        {/* add search icon in box */}
        <i className="fa fa-search text-secondary position-absolute me-4 pt-2 end-0" style={{ width: "25px" }}></i>
      </div>
      <Conversations conversations={conversations} />
      <div className="row text-light mt-auto">
        <div className="row mb-3">
          <span className="cursor">
            <i className="fa fa-trash pt-2 me-2"></i>Clear Conversations
          </span>
        </div>
        <div className="row mb-3">
          <span className="cursor" onClick={() => signOut(auth)}>
            <i className="fa fa-sign-out pt-2 me-2"></i>Log Out
          </span>
        </div>
      </div>
    </div>
  );
};
export default Nav;
