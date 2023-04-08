import Conversation from "./Conversation";
const Conversations = ({ conversations, selectedConversationId, selectConversation }) => {
  return (
    <div className="row overflow-auto">
      {conversations.map((conversation) => (
        <Conversation conversation={conversation} />
      ))}
    </div>
  );
};
export default Conversations;
