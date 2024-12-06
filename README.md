# DRL Trading Bot 🤖📈

A sophisticated automated trading bot powered by Deep Reinforcement Learning (DRL) for optimal trading decisions. Features a modern Next.js frontend interface and FastAPI backend.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Python](https://img.shields.io/badge/python-v3.9+-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-v5.0+-blue.svg)
![Next.js](https://img.shields.io/badge/next.js-v14.0+-black.svg)

## 🌟 Features

- **Advanced AI Trading**
  - Deep Reinforcement Learning (DRL) algorithms
  - Multiple trading strategies (PPO, DQN)
  - Ensemble strategy support
  
- **Real-time Analytics**
  - Live market data integration
  - Portfolio performance tracking
  - Advanced technical indicators
  
- **Risk Management**
  - Position sizing optimization
  - Stop-loss management
  - Portfolio diversification

## 🚀 Quick Start

### Prerequisites

- Python 3.9+
- Node.js 18+
- PostgreSQL
- Docker (optional)

### Backend Setup

1. Create and activate virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Run the backend:
   ```bash
   uvicorn app.main:app --reload
   ```

### Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

### Docker Setup

Run the entire stack using Docker:
```bash
docker-compose up --build
```

## 🏗️ Architecture

### Backend
- FastAPI for RESTful API
- PyTorch for DRL models
- PostgreSQL for data storage
- Alpha Vantage/Yahoo Finance API integration

### Frontend
- Next.js 14
- TypeScript
- TailwindCSS
- Chart.js for visualizations

## 📊 Trading Strategies

The bot implements multiple DRL strategies:

1. **PPO (Proximal Policy Optimization)**
   - Continuous action space
   - Stable training process
   - Risk-adjusted rewards

2. **DQN (Deep Q-Network)**
   - Discrete action space
   - Experience replay
   - Double DQN implementation

## 🔒 Security

- JWT-based authentication
- Rate limiting
- Input validation
- Secure password hashing
- CORS protection

## 📈 Performance

- Real-time market data processing
- Sub-second trading decisions
- Efficient portfolio rebalancing
- Automated risk management

## 🚀 Deployment

### Frontend
Deploy to Vercel:
```bash
cd frontend
vercel
```

### Backend
Deploy to cloud platform (e.g., DigitalOcean, AWS):
```bash
doctl apps create --spec deployment/do-app-spec.yaml
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Alpha Vantage](https://www.alphavantage.co/) for market data
- [PyTorch](https://pytorch.org/) for DRL implementation
- [FastAPI](https://fastapi.tiangolo.com/) for backend framework
- [Next.js](https://nextjs.org/) for frontend framework
