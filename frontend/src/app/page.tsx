import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="mb-4 text-5xl font-bold">AI-Powered Trading Bot</h1>
        <p className="mb-8 text-xl text-gray-300">
          Leverage Deep Reinforcement Learning for smarter trading decisions
        </p>
        <Link
          href="/auth/signup"
          className="rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="bg-gray-800 py-16">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              title="AI-Driven Strategy"
              description="Advanced Deep Reinforcement Learning algorithms for optimal trading decisions"
              icon="🤖"
            />
            <FeatureCard
              title="Real-time Analytics"
              description="Live market data and portfolio performance tracking"
              icon="📊"
            />
            <FeatureCard
              title="Risk Management"
              description="Automated position sizing and stop-loss management"
              icon="🛡️"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-12 text-center text-4xl font-bold">How It Works</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <StepCard
            number="1"
            title="Create Account"
            description="Sign up and configure your trading preferences"
          />
          <StepCard
            number="2"
            title="Connect API"
            description="Link your trading account via secure API"
          />
          <StepCard
            number="3"
            title="Set Strategy"
            description="Choose your risk level and trading strategy"
          />
          <StepCard
            number="4"
            title="Start Trading"
            description="Let the AI bot execute trades automatically"
          />
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="rounded-lg bg-gray-700 p-6 text-center">
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
