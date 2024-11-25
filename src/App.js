import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/videoFusion";
import Resources from "./components/LLM";
import Company from "./components/3dverse";
import Pricing from "./components/Pricing";
import Enterprise from "./components/Enterprise";
import APIPage from "./components/APIPage";
import VideoFusion from "./components/videoFusion";
import LLM from "./components/LLM";
import ThreedVerse from "./components/3dverse";
import PluginPage from "./components/pluginPages/PluginPage";
import PluginDashboard from "./components/pluginPages/PluginDashboard";
import SinglePlugin from "./components/pluginPages/SinglePlugin";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/apiPage" element={<APIPage />} />
        <Route path="/videoFusion" element={<VideoFusion />} />
        <Route path="/llm" element={<LLM />} />
        <Route path="/3dverse" element={<ThreedVerse />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/plugin" element={<PluginPage />} />
        <Route path="/plugin-dashboard" element={<PluginDashboard />} />
        <Route path="/plugin-dashboard/:id" element={<SinglePlugin />} />
      </Routes>
    </Router>
  );
}

export default App;
