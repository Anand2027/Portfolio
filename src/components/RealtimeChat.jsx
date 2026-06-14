import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

// const socket = io("http://localhost:5001");
const socket = io(
  "https://portfolio-anand-6wet.onrender.com",
  {
    transports: ["websocket", "polling"],
  }
);

function RealtimeChat() {
const [isOpen, setIsOpen] = useState(false);
const [username, setUsername] = useState("");
const [joined, setJoined] = useState(false);

const [message, setMessage] = useState("");
const [messages, setMessages] = useState([]);
const [unreadCount, setUnreadCount] = useState(0);

const messagesEndRef = useRef(null);

useEffect(() => {
if ("Notification" in window) {
Notification.requestPermission();
}
}, []);

useEffect(() => {
const handleMessage = (data) => {
setMessages((prev) => [...prev, data]);


  if (!isOpen) {
    setUnreadCount((prev) => prev + 1);
  }

  if (
    data.username !== username &&
    "Notification" in window &&
    Notification.permission === "granted"
  ) {
    new Notification(data.username, {
      body: data.text,
    });
  }
};

socket.on("receive-message", handleMessage);

return () => {
  socket.off("receive-message", handleMessage);
};


}, [isOpen, username]);

useEffect(() => {
messagesEndRef.current?.scrollIntoView({
behavior: "smooth",
});
}, [messages]);

const sendMessage = () => {
if (!message.trim()) return;


const msgData = {
  username,
  text: message,
  time: new Date().toLocaleTimeString(),
};

socket.emit("send-message", msgData);
setMessage("");


};

return (
<>
<button
onClick={() => {
setIsOpen(!isOpen);


      if (!isOpen) {
        setUnreadCount(0);
      }
    }}
    style={{
      position: "fixed",
      bottom: "80px",
      left: "12px",
      zIndex: 16,
      width: "50px",
      height: "45px",
      borderRadius: "50%",
      border: "none",
      background: "#1D9BF0",
      color: "white",
      cursor: "pointer",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
    }}
  >
    {isOpen ? "✕" : "💬"}

    {unreadCount > 0 && !isOpen && (
      <span
        style={{
          position: "absolute",
          top: "-5px",
          right: "-5px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          minWidth: "20px",
          height: "20px",
          fontSize: "11px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {unreadCount}
      </span>
    )}
  </button>

  {isOpen && (
    <div
      style={{
        position: "fixed",
        bottom: "190px",
        left: "20px",
        zIndex: 999999,
        width: "320px",
        height: "500px",
      }}
      className="bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col"
    >
      <div className="bg-blue-500 text-white text-center py-3 rounded-t-xl font-bold">
        💬 Live Chat
      </div>

      {!joined ? (
        <div className="flex flex-col gap-3 p-4 m-auto w-full">
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            onClick={() => {
              if (username.trim()) {
                setJoined(true);
              }
            }}
          >
            Join Chat
          </button>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto p-3 bg-gray-50 space-y-2">
            {messages.map((msg, index) => {
              const isMe = msg.username === username;

              return (
                <div
                  key={index}
                  className={`flex ${
                    isMe ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-2xl shadow text-sm ${
                      isMe
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                  >
                    <div
                      className={`text-[10px] font-bold mb-1 ${
                        isMe ? "text-blue-100" : "text-gray-600"
                      }`}
                    >
                      {msg.username}
                    </div>

                    <div>{msg.text}</div>

                    <div
                      className={`text-[10px] mt-1 ${
                        isMe ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {msg.time}
                    </div>
                  </div>
                </div>
              );
            })}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Type message..."
              className="flex-1 border rounded p-2 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <button
              onClick={sendMessage}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded transition"
            >
              Send
            </button>
          </div>
        </>
      )}
    </div>
  )}
</>


);
}

export default RealtimeChat;


// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";

// const socket = io("http://localhost:5001");

// function RealtimeChat() {
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on("receive-message", (data) => {
//       setMessages((prev) => [...prev, data]);
//     });

//     return () => {
//       socket.off("receive-message");
//     };
//   }, []);

//   const sendMessage = () => {
//     if (!message.trim()) return;

//     const msgData = {
//       text: message,
//       time: new Date().toLocaleTimeString(),
//     };

//     socket.emit("send-message", msgData);

//     setMessage("");
//   };

//   return (
//     <div
//       style={{
//         width: "400px",
//         margin: "30px auto",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         padding: "15px",
//       }}
//     >
//       <h2>Realtime Chat</h2>

//       <div
//         style={{
//           height: "300px",
//           overflowY: "auto",
//           border: "1px solid #ddd",
//           padding: "10px",
//           marginBottom: "10px",
//         }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <strong>{msg.time}</strong> : {msg.text}
//           </div>
//         ))}
//       </div>

//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type message..."
//         style={{ width: "75%", padding: "8px" }}
//       />

//       <button
//         onClick={sendMessage}
//         style={{ padding: "8px 15px", marginLeft: "10px" }}
//       >
//         Send
//       </button>
//     </div>
//   );
// }

// export default RealtimeChat;