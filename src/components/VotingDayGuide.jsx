import { CheckCircle, XCircle, FileText } from 'lucide-react';
import './VotingDayGuide.css';

export default function VotingDayGuide() {
  const dos = [
    'Check your polling station location beforehand',
    'Carry a valid photo ID (Voter ID, Aadhaar, Passport, etc.)',
    'Verify your name is on the electoral roll',
    'Wait patiently in the queue',
    'Follow the instructions of the polling officials',
  ];

  const donts = [
    'Do not carry mobile phones inside the polling booth',
    'Do not take photos of EVMs or your vote',
    'Do not wear party symbols or colors',
    'Do not talk to someone else while casting your vote',
  ];

  return (
    <div className="voting-day-container fade-in">
      <div className="text-center mb-8">
        <h2 className="gradient-text font-bold" style={{ fontSize: '2.5rem' }}>Voting Day Guide</h2>
        <p className="text-secondary mt-4">Everything you need to know for a smooth voting experience.</p>
      </div>

      <div className="prep-section glass-panel mb-8">
        <div className="flex items-center gap-4 mb-4">
          <FileText className="text-accent" size={32} />
          <h3 style={{ fontSize: '1.5rem' }}>Required Documents</h3>
        </div>
        <p className="text-secondary mb-4">You must bring your EPIC (Voter ID card). If you don't have it, you can use any of the alternative photo IDs:</p>
        <ul className="doc-list">
          <li>Aadhaar Card</li>
          <li>PAN Card</li>
          <li>Passport</li>
          <li>Driving License</li>
          <li>Passbook with photograph issued by Bank/Post Office</li>
        </ul>
      </div>

      <div className="grid-dos-donts">
        <div className="dos-panel glass-panel">
          <h3 className="flex items-center gap-2 mb-4" style={{ color: 'var(--success)', fontSize: '1.25rem' }}>
            <CheckCircle /> Do's
          </h3>
          <ul className="info-list">
            {dos.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        
        <div className="donts-panel glass-panel">
          <h3 className="flex items-center gap-2 mb-4" style={{ color: 'var(--danger)', fontSize: '1.25rem' }}>
            <XCircle /> Don'ts
          </h3>
          <ul className="info-list">
            {donts.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
