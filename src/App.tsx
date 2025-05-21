import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Calendar from './pages/Calendar.tsx';
import Clients from './pages/Clients.tsx';
import Payments from './pages/Payments.tsx';
import Marketing from './pages/Marketing.tsx';
import Settings from './pages/Settings.tsx';
import Pricing from './pages/Pricing.tsx';
import Inventory from './pages/Inventory.tsx';
import ClientProfile from './pages/ClientProfile.tsx';
import NotFound from './pages/NotFound.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/client/:id" element={<ClientProfile />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


