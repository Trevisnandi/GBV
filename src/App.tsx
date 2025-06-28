import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ReportForm from './components/ReportForm';
import TrackReport from './components/TrackReport';
import SupportServices from './components/SupportServices';
import Resources from './components/Resources';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <Home setCurrentView={setCurrentView} />;
      case 'report':
        return <ReportForm setCurrentView={setCurrentView} />;
      case 'track':
        return <TrackReport setCurrentView={setCurrentView} />;
      case 'support':
        return <SupportServices setCurrentView={setCurrentView} />;
      case 'resources':
        return <Resources setCurrentView={setCurrentView} />;
      default:
        return <Home setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main>
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;