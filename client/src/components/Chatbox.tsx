import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-[500px] w-[300px] border-2 border-gray-200 p-4 space-y-4">
      <div className="flex-grow overflow-auto">
        {messages.map((message, index) => (
          <div key={index} className="bg-blue-100 px-2 rounded my-1 text-left">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow border-2 border-gray-200 p-2 rounded"
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
