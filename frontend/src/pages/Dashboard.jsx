function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3F4F6",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#4F46E5",
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Welcome Back 👋
      </h1>

      <p
        style={{
          color: "#555",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        Your mental wellness dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >

        <Card
          title="😊 Mood Tracker"
          desc="Track your daily emotions"
        />

        <Card
          title="🤖 AI Chat"
          desc="Talk with Jeeva AI"
        />

        <Card
          title="📖 Journal"
          desc="Write today's thoughts"
        />

        <Card
          title="🧘 Meditation"
          desc="Relax your mind"
        />

        <Card
          title="🚨 Emergency SOS"
          desc="Quick help in crisis"
        />

        <Card
          title="📊 Progress"
          desc="See your improvement"
        />

      </div>
    </div>
  );
}

function Card({ title, desc }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
        cursor: "pointer",
        transition: "0.3s",
      }}
    >
      <h2>{title}</h2>

      <p
        style={{
          marginTop: "15px",
          color: "#666",
        }}
      >
        {desc}
      </p>
    </div>
  );
}

export default Dashboard;