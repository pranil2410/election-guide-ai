import { useState } from 'react';
import { MapPin, CalendarDays } from 'lucide-react';
import './TimelineAssistant.css';

export default function TimelineAssistant() {
  const [selectedState, setSelectedState] = useState('');
  
  const electionData = {
    'Maharashtra': [
      { date: 'Oct 15, 2024', event: 'Voter Registration Deadline' },
      { date: 'Oct 30, 2024', event: 'Candidate Nominations Close' },
      { date: 'Nov 20, 2024', event: 'Voting Day' },
      { date: 'Nov 23, 2024', event: 'Result Declaration' }
    ],
    'Delhi': [
      { date: 'Jan 10, 2025', event: 'Voter Registration Deadline' },
      { date: 'Jan 25, 2025', event: 'Candidate Nominations Close' },
      { date: 'Feb 15, 2025', event: 'Voting Day' },
      { date: 'Feb 18, 2025', event: 'Result Declaration' }
    ],
    'Karnataka': [
      { date: 'Mar 05, 2025', event: 'Voter Registration Deadline' },
      { date: 'Mar 20, 2025', event: 'Candidate Nominations Close' },
      { date: 'Apr 10, 2025', event: 'Voting Day' },
      { date: 'Apr 14, 2025', event: 'Result Declaration' }
    ]
  };

  const states = Object.keys(electionData);

  return (
    <div className="timeline-container fade-in">
      <div className="text-center mb-4">
        <h2 className="gradient-text text-2xl font-bold" style={{ fontSize: '2rem', fontWeight: 700 }}>Personalized Timeline</h2>
        <p className="text-secondary mt-4">Select your state to view upcoming election deadlines and dates.</p>
      </div>

      <div className="selector-container glass-panel flex items-center justify-center gap-4 mt-8" style={{ padding: '2rem', maxWidth: '600px', margin: '2rem auto' }}>
        <MapPin className="text-accent" />
        <select 
          value={selectedState} 
          onChange={(e) => setSelectedState(e.target.value)}
          className="state-select"
        >
          <option value="" disabled>Select your state...</option>
          {states.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {selectedState && (
        <div className="timeline-view mt-8">
          <h3 className="text-center mb-8" style={{ fontSize: '1.5rem' }}>Upcoming Dates for {selectedState}</h3>
          <div className="timeline-events-wrapper">
            {electionData[selectedState].map((item, index) => (
              <div key={index} className="timeline-event glass-panel flex items-center gap-6">
                <div className="date-badge">
                  <CalendarDays size={20} />
                  <span>{item.date}</span>
                </div>
                <div className="event-details" style={{ fontWeight: 600, fontSize: '1.1rem' }}>
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
