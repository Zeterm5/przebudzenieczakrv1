import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import ContactPage from './pages/ContactPage.tsx';
import PrivacyPage from './pages/PrivacyPage.tsx';
import ReturnPage from './pages/ReturnPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/returns" element={<ReturnPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
