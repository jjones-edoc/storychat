import { useState } from 'react';
import Conversations from './conversations_cp/Conversations';
const Nav = () => {
  const [conversations, setConversations] = useState([]);
  return (
    <div className="col-3 bg-dark h-100 d-flex flex-column">
      <div className="row p-2">
        <button className="btn btn-success w-100 d-flex align-items-center">
          <i className="fa fa-plus pt-2" style={{ width: '25px' }}></i>
          <span className="ms-2 fs-3">New Chat</span>
        </button>
      </div>
      <Conversations conversations={conversations} />
      <div className="row text-light mt-auto">
        <div className="row mb-3">
          <span className="cursor">
            <i className="fa fa-trash pt-2 me-2"></i>Clear Conversations
          </span>
        </div>
        <div className="row mb-3">
          <span className="cursor">
            <i className="fa fa-sign-out pt-2 me-2"></i>Log Out
          </span>
        </div>
      </div>
    </div>
  );
};
export default Nav;
