function Hero() {
  return (
    <section
      style={{
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#F8FAFC",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "64px",
            color: "#4F46E5",
            marginBottom: "20px",
          }}
        >
          JeevaSakha
        </h1>

        <h2
          style={{
            fontSize: "32px",
            color: "#111827",
            marginBottom: "20px",
          }}
        >
          AI Mental Wellness Companion
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "auto",
            fontSize: "20px",
            color: "#555",
            lineHeight: "35px",
          }}
        >
          Track your emotions, maintain your journal, chat with an AI
          companion, and access emergency support whenever you need it.
        </p>

        <div style={{ marginTop: "40px" }}>
          <button
            style={{
              background: "#4F46E5",
              color: "white",
              padding: "15px 35px",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              marginRight: "15px",
              cursor: "pointer",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              background: "white",
              color: "#4F46E5",
              padding: "15px 35px",
              border: "2px solid #4F46E5",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
