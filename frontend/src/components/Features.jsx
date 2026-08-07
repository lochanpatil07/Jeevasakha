function Features() {
  const features = [
    {
      title: "😊 Mood Tracker",
      desc: "Track your daily emotions and understand your mental health."
    },
    {
      title: "🤖 AI Chat",
      desc: "Talk with your AI wellness companion anytime."
    },
    {
      title: "📖 Journal",
      desc: "Write your daily thoughts and reflections."
    },
    {
      title: "🧘 Meditation",
      desc: "Relax with guided breathing and meditation."
    },
    {
      title: "🚨 Emergency SOS",
      desc: "Quick access to emergency contacts and support."
    },
    {
      title: "📊 Progress",
      desc: "Visualize your emotional growth over time."
    }
  ];

  return (
    <section
      style={{
        padding: "60px 30px",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#4F46E5",
          marginBottom: "40px",
        }}
      >
        Features
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "25px",
        }}
      >
        {features.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#F8FAFC",
              padding: "25px",
              borderRadius: "15px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;