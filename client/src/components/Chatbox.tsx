import React, { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Triggered every time the messages array changes

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // setMessages([...messages, newMessage]);
    setMessages([...messages, { name: "User", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[500px] w-[300px] border-2 border-primary p-4 space-y-4 rounded-lg">
      <div className="flex-grow overflow-auto hide-scrollbar">
        {messages.map((message, index) => (
          <div key={index} className="bg-blue-100 px-2 rounded my-1 text-left">
            {/* {message} */}
            <span className="font-bold text-primary">{message.name}: </span>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} /> {/* Invisible element to scroll to */}
      </div>
      <form onSubmit={handleSendMessage} className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border-2 border-primary p-2 rounded"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="border-2 border-blue-500 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
