import { useState } from "react";

function AIChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! 👋 I'm JeevaSakha AI. How are you feeling today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: input },
      {
        sender: "ai",
        text: "Thank you for sharing. I'm here to support you. ❤️",
      },
    ]);

    setInput("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F7FB",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#4F46E5",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        🤖 JeevaSakha AI Chat
      </h1>

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          padding: "20px",
          minHeight: "500px",
        }}
      >
        <div
          style={{
            height: "400px",
            overflowY: "auto",
            marginBottom: "20px",
          }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user"
                    ? "flex-end"
                    : "flex-start",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  background:
                    msg.sender === "user"
                      ? "#4F46E5"
                      : "#E5E7EB",
                  color:
                    msg.sender === "user"
                      ? "white"
                      : "#111827",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  maxWidth: "70%",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flex: 1,
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #ccc",
            }}
          />

          <button
            onClick={sendMessage}
            style={{
              background: "#4F46E5",
              color: "white",
              border: "none",
              padding: "14px 25px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default AIChat;