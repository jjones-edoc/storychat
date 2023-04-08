const Conversation = ({ conversation }) => {
  const { id, name, messages } = conversation;

  return (
    <div className="row mb-3">
      <span className="cursor text-white">
        {/* add font awesome icon with chat bubble */}
        <i className="fa fa-comment pt-2 me-2"></i>
        {name}
      </span>
    </div>
  );
};
export default Conversation;
