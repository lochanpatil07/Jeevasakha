import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    emergencyContact: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    try {
      const res = await API.post("/auth/register", formData);

      alert("Registration Successful!");

      console.log(res.data);

      navigate("/login");

    } catch (error) {
      alert(
        error.response?.data?.message || "Registration Failed"
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        background: "#EEF2FF",
      }}
    >
      <div
        style={{
          width: "450px",
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#4F46E5",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h1>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          style={inputStyle}
          onChange={handleChange}
        />

        <input
          name="age"
          type="number"
          placeholder="Age"
          style={inputStyle}
          onChange={handleChange}
        />

        <select
          name="gender"
          style={inputStyle}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <input
          name="emergencyContact"
          type="text"
          placeholder="Emergency Contact"
          style={inputStyle}
          onChange={handleChange}
        />

        <button
          style={buttonStyle}
          onClick={handleRegister}
        >
          Register
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account?

          <Link
            to="/login"
            style={{
              marginLeft: "5px",
              color: "#4F46E5",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "15px",
  background: "#4F46E5",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
  cursor: "pointer",
};

export default Register;