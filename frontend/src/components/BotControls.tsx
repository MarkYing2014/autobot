import { useState } from 'react';

interface BotControlsProps {
  status: string;
  onStatusChange: (status: string) => void;
}

const BotControls = ({ status, onStatusChange }: BotControlsProps) => {
  const [selectedSymbol, setSelectedSymbol] = useState('AAPL');
  
  const handleStart = async () => {
    try {
      const response = await fetch('/api/bot/start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol: selectedSymbol }),
      });
      
      if (response.ok) {
        onStatusChange('active');
      }
    } catch (error) {
      console.error('Failed to start bot:', error);
    }
  };
  
  const handleStop = async () => {
    try {
      const response = await fetch('/api/bot/stop', {
        method: 'POST',
      });
      
      if (response.ok) {
        onStatusChange('inactive');
      }
    } catch (error) {
      console.error('Failed to stop bot:', error);
    }
  };
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Bot Controls</h2>
      
      <div className="flex items-center space-x-4 mb-4">
        <select
          value={selectedSymbol}
          onChange={(e) => setSelectedSymbol(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="AAPL">AAPL</option>
          <option value="GOOGL">GOOGL</option>
          <option value="MSFT">MSFT</option>
          <option value="AMZN">AMZN</option>
        </select>
        
        {status === 'inactive' ? (
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Start Bot
          </button>
        ) : (
          <button
            onClick={handleStop}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Stop Bot
          </button>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-red-500'}`} />
        <span className="text-gray-600">Status: {status}</span>
      </div>
    </div>
  );
};

export default BotControls;
