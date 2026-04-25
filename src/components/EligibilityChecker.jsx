import { useState } from 'react';
import './EligibilityChecker.css';

export default function EligibilityChecker() {
  const [age, setAge] = useState('');
  const [isCitizen, setIsCitizen] = useState(null);
  const [result, setResult] = useState(null);

  const checkEligibility = (e) => {
    e.preventDefault();
    if (!age || isCitizen === null) return;

    if (parseInt(age) >= 18 && isCitizen === 'yes') {
      setResult({
        status: 'success',
        title: 'You are eligible to vote! 🎉',
        message: 'Since you are 18+ and a citizen, you can register to vote. Make sure you apply for your Voter ID.'
      });
    } else if (isCitizen === 'no') {
      setResult({
        status: 'error',
        title: 'Not Eligible',
        message: 'You must be a citizen of the country to be eligible to vote.'
      });
    } else {
      setResult({
        status: 'warning',
        title: 'Not Eligible Yet',
        message: `You must be 18 or older to vote. You have ${18 - parseInt(age)} years left until you can participate.`
      });
    }
  };

  return (
    <div className="eligibility-container fade-in">
      <div className="text-center mb-8">
        <h2 className="gradient-text font-bold" style={{ fontSize: '2.5rem' }}>Eligibility Checker</h2>
        <p className="text-secondary mt-4">Answer two quick questions to find out if you can vote.</p>
      </div>

      <div className="eligibility-form glass-panel max-w-lg mx-auto" style={{ maxWidth: '500px', margin: '0 auto', padding: '2rem' }}>
        <form onSubmit={checkEligibility} className="flex flex-col gap-6">
          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>What is your age?</label>
            <input 
              type="number" 
              min="1" 
              max="120"
              value={age} 
              onChange={(e) => setAge(e.target.value)} 
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="form-group">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Are you a citizen?</label>
            <div className="flex gap-4">
              <button 
                type="button" 
                className={`choice-btn ${isCitizen === 'yes' ? 'selected' : ''}`}
                onClick={() => setIsCitizen('yes')}
              >
                Yes
              </button>
              <button 
                type="button" 
                className={`choice-btn ${isCitizen === 'no' ? 'selected' : ''}`}
                onClick={() => setIsCitizen('no')}
              >
                No
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary mt-4 w-full">Check Eligibility</button>
        </form>

        {result && (
          <div className={`result-box mt-8 fade-in ${result.status}`}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{result.title}</h3>
            <p>{result.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}
