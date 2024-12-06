'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            AI-Powered Trading Bot
          </h1>
          <p className="text-xl mb-8">
            Leverage Deep Reinforcement Learning for automated trading strategies
          </p>
          
          <div className="flex justify-center space-x-4">
            <Link
              href="/auth/signin"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="bg-transparent border-2 border-indigo-600 hover:bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Advanced AI Trading</h3>
            <p className="text-gray-300">
              Utilize state-of-the-art Deep Reinforcement Learning algorithms for optimal trading decisions
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Real-time Analytics</h3>
            <p className="text-gray-300">
              Monitor your portfolio performance with real-time data and advanced analytics
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Risk Management</h3>
            <p className="text-gray-300">
              Smart risk management strategies to protect your investments
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">Create Account</h4>
              <p className="text-gray-300">Sign up and complete verification</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">Configure Bot</h4>
              <p className="text-gray-300">Set your trading preferences</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">Connect API</h4>
              <p className="text-gray-300">Link your trading account</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold mb-2">Start Trading</h4>
              <p className="text-gray-300">Let AI handle your trades</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
