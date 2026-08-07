function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <h2
        style={{
          color: "#4F46E5",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        JeevaSakha
      </h2>

      {/* Menu */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          fontSize: "18px",
        }}
      >
        <a href="/" style={{ textDecoration: "none", color: "#333" }}>
          Home
        </a>

        <a href="#" style={{ textDecoration: "none", color: "#333" }}>
          Features
        </a>

        <a href="#" style={{ textDecoration: "none", color: "#333" }}>
          About
        </a>

        <a href="#" style={{ textDecoration: "none", color: "#333" }}>
          Contact
        </a>
      </div>

      {/* Buttons */}
      <div>
        <button
          style={{
            padding: "10px 18px",
            marginRight: "10px",
            border: "none",
            background: "#E5E7EB",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <button
          style={{
            padding: "10px 18px",
            border: "none",
            background: "#4F46E5",
            color: "white",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </nav>
  );
}

export default Navbar;