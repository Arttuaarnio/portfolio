import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "./pages/HomePage";
import Projects from "./pages/ProjectsPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Navbar />
        <main className="pt-20">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
