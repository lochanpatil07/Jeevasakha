import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MoodTracker from "./pages/MoodTracker";
import AIChat from "./pages/AIChat";
import Journal from "./pages/Journal";
import Meditation from "./pages/Meditation";
import Emergency from "./pages/Emergency";
import Progress from "./pages/Progress";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mood" element={<MoodTracker />} />
      <Route path="/chat" element={<AIChat />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/meditation" element={<Meditation />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/progress" element={<Progress />} />
    </Routes>
  );
}

export default App;