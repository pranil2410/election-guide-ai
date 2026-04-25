import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ProcessGuide from './components/ProcessGuide';
import TimelineAssistant from './components/TimelineAssistant';
import EligibilityChecker from './components/EligibilityChecker';
import VotingDayGuide from './components/VotingDayGuide';
import AwarenessEducation from './components/AwarenessEducation';
import Chatbot from './components/Chatbot';
import { Moon, Sun } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home': return <Home setView={setCurrentView} />;
      case 'process': return <ProcessGuide />;
      case 'timeline': return <TimelineAssistant />;
      case 'eligibility': return <EligibilityChecker />;
      case 'voting-day': return <VotingDayGuide />;
      case 'awareness': return <AwarenessEducation />;
      default: return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="app-container">
      <header className="app-header glass-panel">
        <div className="container flex justify-between items-center" style={{ padding: '1rem', border: 'none', boxShadow: 'none' }}>
          <div className="logo cursor-pointer" onClick={() => setCurrentView('home')}>
            <h1 className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Election Guide AI</h1>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Navigation currentView={currentView} setCurrentView={setCurrentView} />
          </div>
        </div>
      </header>

      <main className="container" style={{ padding: '2rem 1rem', minHeight: '80vh' }}>
        {renderView()}
      </main>

      <Chatbot />
    </div>
  );
}

export default App;
