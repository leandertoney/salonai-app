import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Clients from './pages/Clients';
import Payments from './pages/Payments';
import Marketing from './pages/Marketing';
import Settings from './pages/Settings';
import Pricing from './pages/Pricing';
import Inventory from './pages/Inventory';
import ClientProfile from './pages/ClientProfile';
import NotFound from './pages/NotFound';

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


