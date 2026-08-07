function Meditation() {

  const sessions = [
    {
      title: "🌬 5 Minute Breathing",
      time: "5 min",
      desc: "Reduce stress instantly"
    },
    {
      title: "😴 Sleep Meditation",
      time: "10 min",
      desc: "Sleep peacefully"
    },
    {
      title: "🧠 Anxiety Relief",
      time: "8 min",
      desc: "Calm your mind"
    },
    {
      title: "🎵 Focus Music",
      time: "30 min",
      desc: "Improve concentration"
    }
  ];

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
          marginBottom: "40px",
        }}
      >
        🧘 Meditation Library
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
        }}
      >
        {sessions.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>{item.title}</h2>

            <p>{item.desc}</p>

            <p>
              <strong>Duration:</strong> {item.time}
            </p>

            <button
              style={{
                marginTop: "20px",
                background: "#4F46E5",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Start Session
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Meditation;