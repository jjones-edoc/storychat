const Nav = () => {
  return (
    <div className="col-3 bg-dark h-100 d-flex">
      <button className="btn btn-success w-100 my-3 d-flex align-items-center" style={{ maxHeight: "3rem" }}>
        <i className="fa fa-plus pt-2"></i>
        <span className="ms-2 fs-3">New Chat</span>
      </button>
    </div>
  );
};
export default Nav;
