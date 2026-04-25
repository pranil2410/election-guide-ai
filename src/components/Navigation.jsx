import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navigation.css';

export default function Navigation({ currentView, setCurrentView }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'process', label: 'Process Guide' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'eligibility', label: 'Eligibility' },
  ];

  const handleNav = (id) => {
    setCurrentView(id);
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      {/* Desktop Nav */}
      <ul className="desktop-nav">
        {navItems.map(item => (
          <li key={item.id}>
            <button 
              className={`nav-btn ${currentView === item.id ? 'active' : ''}`}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Nav Toggle */}
      <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="mobile-nav glass-panel">
          <ul>
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  className={`nav-btn ${currentView === item.id ? 'active' : ''}`}
                  onClick={() => handleNav(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
