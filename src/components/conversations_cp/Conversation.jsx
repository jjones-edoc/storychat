const Conversation = ({
  conversation,
  selectedConversationId,
  selectConversation,
}) => {
  const { id, name, messages } = conversation;
  const selected = selectedConversationId === id;
  const classNames = `conversation ${selected ? 'selected' : ''}`;
  return (
    <div className={classNames} onClick={() => selectConversation(id)}>
      <div className="name">{name}</div>
      <div className="messages">{messages.length}</div>
    </div>
  );
};
export default Conversation;
