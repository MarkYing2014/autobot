const PortfolioSummary = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Portfolio Summary</h2>
      
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">Total Value</p>
          <p className="text-3xl font-bold">$10,900.00</p>
        </div>
        
        <div>
          <p className="text-gray-600">Daily Return</p>
          <p className="text-xl font-semibold text-green-500">+2.3%</p>
        </div>
        
        <div>
          <p className="text-gray-600">Number of Trades</p>
          <p className="text-xl font-semibold">24</p>
        </div>
        
        <div>
          <p className="text-gray-600">Win Rate</p>
          <p className="text-xl font-semibold">68%</p>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">Current Positions</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>AAPL</span>
              <span className="text-green-500">+1.2%</span>
            </div>
            <div className="flex justify-between">
              <span>GOOGL</span>
              <span className="text-red-500">-0.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;
