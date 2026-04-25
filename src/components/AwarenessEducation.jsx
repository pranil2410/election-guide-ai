import { useState } from 'react';
import { Lightbulb, Info, AlertTriangle } from 'lucide-react';
import './AwarenessEducation.css';

export default function AwarenessEducation() {
  const cards = [
    {
      myth: "My one vote doesn't make a difference.",
      fact: "Every vote counts! Many elections are won by incredibly small margins. Your vote gives you a voice in how your community is run."
    },
    {
      myth: "I need to pay a fee to register to vote.",
      fact: "Voter registration is completely free. Beware of any scams asking for money to process your voter ID."
    },
    {
      myth: "I can vote online using my phone.",
      fact: "Currently, voting requires you to physically visit a polling station to cast a ballot via EVM or paper. Online voting is not yet established for general citizens."
    },
    {
      myth: "I have to vote for all candidates on the ballot.",
      fact: "You have the freedom to vote for whichever candidates you choose. If none appeal to you, you can use the NOTA (None of the Above) option."
    }
  ];

  const [flippedIndex, setFlippedIndex] = useState(null);

  return (
    <div className="awareness-container fade-in">
      <div className="text-center mb-8">
        <h2 className="gradient-text font-bold" style={{ fontSize: '2.5rem' }}>Awareness & Education</h2>
        <p className="text-secondary mt-4">Separate fact from fiction. Tap a card to reveal the truth!</p>
      </div>

      <div className="myth-fact-grid mt-8">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`flip-card ${flippedIndex === idx ? 'flipped' : ''}`}
            onClick={() => setFlippedIndex(flippedIndex === idx ? null : idx)}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front glass-panel">
                <AlertTriangle className="text-warning mb-4" size={32} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--danger)' }}>MYTH</h3>
                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>"{card.myth}"</p>
                <div className="tap-hint">Tap to flip</div>
              </div>
              <div className="flip-card-back glass-panel">
                <Lightbulb className="text-success mb-4" size={32} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--success)' }}>FACT</h3>
                <p style={{ fontSize: '1.1rem' }}>{card.fact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="importance-section glass-panel mt-12 text-center" style={{ padding: '3rem 2rem' }}>
        <Info className="text-accent mb-4 mx-auto" size={48} />
        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Why Your Vote Matters</h3>
        <p className="text-secondary max-w-2xl mx-auto" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Voting is not just a right; it's a fundamental responsibility. It's the most powerful tool we have to shape the future of our society, influence policies, and hold leaders accountable. When you vote, you participate directly in democracy.
        </p>
      </div>
    </div>
  );
}
