import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { AppLayout } from './layouts/AppLayout';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { Calendar } from './pages/Calendar';
import { Clients } from './pages/Clients';
import { ClientProfile } from './pages/ClientProfile';
import { Payments } from './pages/Payments';
import { Marketing } from './pages/Marketing';
import { Analytics } from './pages/Analytics';
import { Settings } from './pages/Settings';
import { Pricing } from './pages/Pricing';
import { GetDemo } from './pages/GetDemo';
import { Inventory } from './pages/Inventory';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="get-demo" element={<GetDemo />} />
        </Route>
        
        {/* App routes (would normally be protected) */}
        <Route path="/" element={<AppLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/:id" element={<ClientProfile />} />
          <Route path="payments" element={<Payments />} />
          <Route path="marketing" element={<Marketing />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        
        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;