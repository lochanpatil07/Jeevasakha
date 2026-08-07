import { useState } from "react";

function Journal() {
  const [entry, setEntry] = useState("");

  const handleSave = () => {
    alert("Journal saved successfully!");
    // Later we'll save to MongoDB
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F8FAFC",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#4F46E5",
          marginBottom: "20px",
        }}
      >
        📖 Daily Journal
      </h1>

      <p
        style={{
          color: "#666",
          marginBottom: "25px",
        }}
      >
        Write about your day, thoughts, feelings, or anything on your mind.
      </p>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="How was your day today?"
        style={{
          width: "100%",
          height: "300px",
          padding: "20px",
          fontSize: "17px",
          borderRadius: "12px",
          border: "1px solid #ccc",
          resize: "none",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={handleSave}
        style={{
          marginTop: "25px",
          background: "#4F46E5",
          color: "white",
          border: "none",
          padding: "15px 35px",
          borderRadius: "10px",
          fontSize: "17px",
          cursor: "pointer",
        }}
      >
        Save Journal
      </button>
    </div>
  );
}

export default Journal;