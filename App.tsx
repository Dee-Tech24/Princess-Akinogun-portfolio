
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AuthorPage from './pages/AuthorPage';
import FounderPage from './pages/FounderPage';
import CoachPage from './pages/CoachPage';
import SpeakerPage from './pages/SpeakerPage';
import SpeakingPage from './pages/SpeakingPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/author" element={<AuthorPage />} />
          <Route path="/founder" element={<FounderPage />} />
          <Route path="/coach" element={<CoachPage />} />
          <Route path="/speaker" element={<SpeakerPage />} />
          <Route path="/speaking" element={<SpeakingPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
