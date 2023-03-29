import Conversation from './Conversation';
const Conversations = ({
  conversations,
  selectedConversationId,
  selectConversation,
}) => {
  return (
    <div className="row">
      {conversations.map((conversation) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          selectedConversationId={selectedConversationId}
          selectConversation={selectConversation}
        />
      ))}
    </div>
  );
};
export default Conversations;
