'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import TradingChart from '@/components/TradingChart';
import BotControls from '@/components/BotControls';
import PortfolioSummary from '@/components/PortfolioSummary';

export default function Dashboard() {
  const router = useRouter();
  const [botStatus, setBotStatus] = useState('inactive');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/signin');
      return;
    }

    // Fetch initial data
    const fetchData = async () => {
      try {
        const response = await fetch('/api/bot/status', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setBotStatus(data.status);
        } else if (response.status === 401) {
          // Token expired or invalid
          localStorage.removeItem('token');
          router.push('/auth/signin');
        }
      } catch (error) {
        console.error('Error fetching bot status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Trading Dashboard</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  router.push('/auth/signin');
                }}
                className="ml-4 text-gray-600 hover:text-gray-800"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Summary */}
          <div className="lg:col-span-1">
            <PortfolioSummary />
          </div>
          
          {/* Trading Chart */}
          <div className="lg:col-span-2">
            <TradingChart />
          </div>
        </div>
        
        {/* Bot Controls */}
        <div className="mt-8">
          <BotControls status={botStatus} onStatusChange={setBotStatus} />
        </div>
      </main>
    </div>
  );
}
