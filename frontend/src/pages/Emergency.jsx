function Emergency() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FEF2F2",
        padding: "40px",
      }}
    >
      <h1 style={{ color: "#DC2626" }}>
        🚨 Emergency Support
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "20px",
        }}
      >
        If you are in distress, help is one click away.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px",
        }}
      >
        <button style={buttonStyle}>📞 Call Guardian</button>

        <button style={buttonStyle}>📍 Share Live Location</button>

        <button style={buttonStyle}>🏥 Nearby Hospital</button>

        <button style={buttonStyle}>☎ Mental Health Helpline</button>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "20px",
  fontSize: "18px",
  background: "#DC2626",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Emergency;