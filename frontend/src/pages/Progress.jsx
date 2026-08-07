function Progress() {
  const stats = [
    {
      title: "😊 Average Mood",
      value: "8.5 / 10",
      color: "#4F46E5",
    },
    {
      title: "📖 Journal Entries",
      value: "24",
      color: "#10B981",
    },
    {
      title: "🧘 Meditation Minutes",
      value: "310",
      color: "#F59E0B",
    },
    {
      title: "🔥 Current Streak",
      value: "12 Days",
      color: "#EF4444",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#F8FAFC",
      }}
    >
      <h1
        style={{
          color: "#4F46E5",
          marginBottom: "35px",
        }}
      >
        📊 Your Progress
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 5px 20px rgba(0,0,0,.08)",
            }}
          >
            <h2>{item.title}</h2>

            <h1
              style={{
                color: item.color,
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "50px",
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 5px 20px rgba(0,0,0,.08)",
        }}
      >
        <h2>🏆 Achievements</h2>

        <ul
          style={{
            lineHeight: "40px",
            fontSize: "18px",
          }}
        >
          <li>🥇 First Journal Entry</li>
          <li>🔥 7 Day Streak</li>
          <li>😊 Mood Improved</li>
          <li>🧘 Completed Meditation</li>
        </ul>
      </div>
    </div>
  );
}

export default Progress;