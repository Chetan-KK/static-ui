import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Enterprise from "./components/Enterprise";
import APIPage from "./components/APIPage";
import VideoFusion from "./components/videoFusion";
import LLM from "./components/LLM";
import ThreedVerse from "./components/3dverse";
import PluginPage from "./components/pluginPages/PluginPage";
import PluginDashboard from "./components/pluginPages/PluginDashboard";
import SinglePlugin from "./components/pluginPages/SinglePlugin";
import TrainMasterPage from "./components/trainMaster/TrainMasterPage";
import Imagen from "./components/trainMaster/Imagen";
import ModelPage from "./components/trainMaster/ModelPage";
import AiVoiceGeneratorPage from "./components/AiVoiceGeneratorPage";

function App() {
  return (
    // <main className="bg-[#f9f9f9] dark:bg-gray-900">
    <main className="">

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
          <Route path="/train-master" element={<TrainMasterPage />} />
          <Route path="/train-master/imagen" element={<Imagen />} />
          <Route path="/train-master/imagen/flux-lora-trainer" element={<ModelPage />} />
          <Route path="/ai-voice-generator-page" element={<AiVoiceGeneratorPage />} />

        </Routes>

      </Router>
    </main>
  );
}

export default App;
