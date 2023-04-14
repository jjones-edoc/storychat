import botimg from "../img/bot.jpeg";
import { ProjContext } from "../context/ProjContext";
import { useContext, useState } from "react";
const AIChat = () => {
  const { currentUser } = useContext(ProjContext);
  const charURL = process.env.AI_CHAT_URL || "http://127.0.0.1:5001/storychat-f0196/us-central1/app/aichat";
  const [messages, setMessages] = useState([{ text: "Hello! How are you today?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const cleanResponse = (response) => {
    return response.replace(/\\n/g, " ");
  };

  const getAIResponse = (input) => {
    fetch(charURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
    }).then((res) => {
      res.json().then((data) => {
        setMessages((prev) => [...prev, { text: cleanResponse(data.response), sender: "bot" }]);
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") return;
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);
    getAIResponse(input);
    setInput("");
  };
  return (
    <div className="position-relative w-100 h-100 g-0 p-0 overflow-hidden col d-flex flex-column">
      <div className="container-fluid h-100 overflow-auto d-flex flex-column align-items-stretch">
        {messages.map((message, index) => {
          return (
            <div key={index} className={index == messages.length - 1 ? "flex-auto" : ""}>
              <div className={`f-c p-3 ${message.sender === "user" ? "bg1" : ""}`}>
                <div className="col-1">
                  <img className="chatImg" src={message.sender == "user" ? currentUser.photoURL : botimg} />
                </div>
                <div className="col">{message.text}</div>
              </div>
            </div>
          );
        })}
        <div className="bg1 flex-shrink-0" style={{ height: "58px" }}></div>
      </div>
      <div className="mb-2 ms-2 me-4 bg-transparent text-light position-absolute bottom-0 start-0 end-0">
        <form onSubmit={handleSubmit} className="w-100">
          {/* text area that looks like an input field with font awesome icon fa-paper-plane */}
          <input
            className="form-control"
            placeholder="Type something..."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}></input>
          {/* icon at the end  */}
          <i className="fa fa-paper-plane text-secondary position-absolute pt-1 end-0 top-0 mt-2 me-5"></i>
        </form>
      </div>
    </div>
  );
};
export default AIChat;
