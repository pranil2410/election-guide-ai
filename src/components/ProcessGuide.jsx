import { useState } from 'react';
import { UserPlus, FileSignature, Mic, Vote, Calculator, Trophy } from 'lucide-react';
import './ProcessGuide.css';

export default function ProcessGuide() {
  const steps = [
    { id: 1, title: 'Voter Registration', desc: 'Ensure you are on the electoral roll by filling out Form 6 online or offline.', icon: <UserPlus /> },
    { id: 2, title: 'Candidate Nomination', desc: 'Candidates file their nomination papers to the Election Commission.', icon: <FileSignature /> },
    { id: 3, title: 'Campaigning', desc: 'Candidates present their manifestos and rally for public support.', icon: <Mic /> },
    { id: 4, title: 'Voting Day', desc: 'Citizens cast their votes at assigned polling booths using EVMs or ballots.', icon: <Vote /> },
    { id: 5, title: 'Counting', desc: 'Votes are securely counted in the presence of designated officials.', icon: <Calculator /> },
    { id: 6, title: 'Results', desc: 'The candidate with the most votes in an area is declared the winner.', icon: <Trophy /> },
  ];

  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="process-guide fade-in">
      <div className="text-center mb-4">
        <h2 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 700 }}>How Elections Work</h2>
        <p className="text-secondary mt-4">A simple step-by-step guide to understanding the democratic process.</p>
      </div>

      <div className="stepper-container flex flex-col md:flex-row mt-8 gap-6">
        <div className="steps-sidebar glass-panel">
          {steps.map(step => (
            <div 
              key={step.id} 
              className={`step-item ${activeStep === step.id ? 'active' : ''}`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>

        <div className="step-content glass-panel flex-1">
          <div className="content-icon text-accent mb-4" style={{ display: 'inline-block', padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: '50%' }}>
            {steps.find(s => s.id === activeStep)?.icon}
          </div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{steps.find(s => s.id === activeStep)?.title}</h3>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{steps.find(s => s.id === activeStep)?.desc}</p>
        </div>
      </div>
    </div>
  );
}
