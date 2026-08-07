import { useState } from "react";

function AIChat() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello 👋 I'm Jeeva AI. How are you feeling today?"
    }
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        sender: "user",
        text: message,
      },
      {
        sender: "ai",
        text: "Thank you for sharing. I'm here to support you. 💜",
      },
    ]);

    setMessage("");
  };

  return (
    <div
      style={{
        padding: "40px",
        background: "#EEF2FF",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "#4F46E5",
          marginBottom: "30px",
        }}
      >
        🤖 Jeeva AI Therapist
      </h1>

      <div
        style={{
          background: "white",
          height: "500px",
          borderRadius: "15px",
          padding: "20px",
          overflowY: "auto",
          boxShadow: "0 5px 20px rgba(0,0,0,.1)",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign:
                msg.sender === "user"
                  ? "right"
                  : "left",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "12px 18px",
                borderRadius: "15px",
                background:
                  msg.sender === "user"
                    ? "#4F46E5"
                    : "#E5E7EB",
                color:
                  msg.sender === "user"
                    ? "white"
                    : "black",
                maxWidth: "70%",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          marginTop: "20px",
        }}
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your thoughts..."
          style={{
            flex: 1,
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            marginLeft: "15px",
            padding: "15px 25px",
            background: "#4F46E5",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default AIChat;