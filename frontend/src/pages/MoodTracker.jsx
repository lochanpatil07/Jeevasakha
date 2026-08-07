import { useState } from "react";

function MoodTracker() {
  const [mood, setMood] = useState("");

  const moods = [
    "😊 Happy",
    "😌 Calm",
    "😐 Neutral",
    "😔 Sad",
    "😡 Angry",
    "😰 Anxious",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: "60px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          color: "#4F46E5",
          fontSize: "50px",
        }}
      >
        Mood Tracker
      </h1>

      <p
        style={{
          fontSize: "22px",
          color: "#555",
          marginTop: "15px",
        }}
      >
        How are you feeling today?
      </p>

      <div
        style={{
          marginTop: "50px",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
          maxWidth: "700px",
          marginInline: "auto",
        }}
      >
        {moods.map((item) => (
          <button
            key={item}
            onClick={() => setMood(item)}
            style={{
              padding: "25px",
              borderRadius: "15px",
              border: "none",
              background:
                mood === item ? "#4F46E5" : "white",
              color:
                mood === item ? "white" : "#333",
              fontSize: "20px",
              cursor: "pointer",
              boxShadow: "0 5px 20px rgba(0,0,0,.1)",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {mood && (
        <div
          style={{
            marginTop: "60px",
            fontSize: "30px",
            color: "#4F46E5",
            fontWeight: "bold",
          }}
        >
          Your Mood Today:
          <br />
          {mood}
        </div>
      )}
    </div>
  );
}

export default MoodTracker;