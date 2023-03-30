const AIChat = () => {
  return (
    <div className="position-relative w-100 h-100 g-0 p-0 overflow-hidden col d-flex flex-column">
      <div className="container-fluid h-100 overflow-scrolly d-flex flex-column align-items-stretch">
        <div className="row f-c bg1">Hello there</div>
        <div className="row flex-grow-1"></div>
        <div className="row bg1 flex-shrink-0" style={{ height: '58px' }}></div>
      </div>
      <div className="row w-100 ms-1 bg-transparent text-light mb-2 position-absolute bottom-0">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Let's chat"
          />
        </div>
        <div className="col-2">
          {/* small send button with font awesome icon */}
          <button className="btn btn-success w-100">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AIChat;
