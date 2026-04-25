import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your Election Assistant. Ask me anything like 'How do I vote?' or 'What documents are required?'", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const predefinedFAQs = [
    { keywords: ['how', 'vote'], answer: 'To vote, you need to register first. On voting day, go to your designated polling booth, show your ID, and cast your vote via EVM or paper ballot.' },
    { keywords: ['document', 'id', 'required'], answer: 'You must carry your Voter ID (EPIC). Alternative IDs include Aadhaar, PAN Card, Passport, or Driving License.' },
    { keywords: ['where', 'polling', 'booth', 'location'], answer: 'You can find your polling booth by visiting the official Election Commission portal and searching with your EPIC number.' },
    { keywords: ['register', 'apply'], answer: 'You can register to vote by filling out Form 6 online on the Election Commission website or offline by submitting it to the Electoral Registration Officer.' },
    { keywords: ['age', 'eligible'], answer: 'You must be at least 18 years old and a citizen to be eligible to vote.' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInput('');

    // Rule-based matching
    setTimeout(() => {
      let foundAnswer = "I'm sorry, I didn't understand that. Try asking about voting documents, how to vote, or where your polling booth is.";
      const lowerInput = userMessage.toLowerCase();
      
      for (const faq of predefinedFAQs) {
        if (faq.keywords.some(keyword => lowerInput.includes(keyword))) {
          foundAnswer = faq.answer;
          break;
        }
      }

      setMessages(prev => [...prev, { text: foundAnswer, sender: 'bot' }]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {!isOpen && (
        <button className="chat-fab glass-panel flex items-center justify-center" onClick={() => setIsOpen(true)}>
          <MessageSquare size={28} className="text-accent" />
        </button>
      )}

      {isOpen && (
        <div className="chat-window glass-panel shadow-lg fade-in">
          <div className="chat-header flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageSquare size={20} />
              <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Election Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: 'white' }}><X size={20} /></button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="chat-input-area flex gap-2">
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Ask a question..."
              className="chat-input"
            />
            <button type="submit" className="chat-send-btn flex items-center justify-center">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
