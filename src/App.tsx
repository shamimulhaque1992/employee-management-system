import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CardView from "./pages/CardView";
import TableView from "./pages/TableView";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { useState } from "react";
import EmployeeDetails from "./pages/EmployeeDetails";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col">
          <Navbar toggleSidebar={toggleSidebar} />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/employee/:id" element={<EmployeeDetails />} />
              <Route path="/card-view" element={<CardView />} />
              <Route path="/table-view" element={<TableView />} />
              <Route path="/" element={<CardView />} /> {/* Default route */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
