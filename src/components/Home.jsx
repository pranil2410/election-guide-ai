import { BookOpen, Calendar, CheckCircle, Info, ShieldAlert, Navigation } from 'lucide-react';
import './Home.css';

export default function Home({ setView }) {
  const cards = [
    { id: 'process', title: 'Process Guide', desc: 'Learn how the election works step-by-step', icon: <BookOpen className="text-accent" /> },
    { id: 'timeline', title: 'Timeline Assistant', desc: 'Find key dates and deadlines for your state', icon: <Calendar className="text-accent" /> },
    { id: 'eligibility', title: 'Eligibility Checker', desc: 'Quickly check if you are eligible to vote', icon: <CheckCircle className="text-accent" /> },
    { id: 'voting-day', title: 'Voting Day Guide', desc: 'Everything you need to know for polling day', icon: <Navigation className="text-accent" /> },
    { id: 'awareness', title: 'Awareness & Education', desc: 'Myths vs Facts and why your vote matters', icon: <ShieldAlert className="text-accent" /> },
  ];

  return (
    <div className="home-container fade-in">
      <div className="hero-section text-center mb-4 mt-8">
        <h2 className="hero-title gradient-text">Your Friendly Election Assistant</h2>
        <p className="hero-subtitle">Simplifying the democratic process for every citizen. Choose an option to get started.</p>
      </div>

      <div className="grid-cards mt-8">
        {cards.map(card => (
          <div key={card.id} className="feature-card glass-panel cursor-pointer" onClick={() => setView(card.id)}>
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
