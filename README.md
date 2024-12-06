# DRL Trading Bot

A sophisticated trading bot that leverages Deep Reinforcement Learning (DRL) for automated stock trading, featuring a modern Next.js frontend interface.

## Project Structure

```
trading-bot-drl/
├── backend/                # Python backend with FastAPI
│   ├── app/
│   │   ├── api/           # API endpoints and routes
│   │   ├── core/          # Core application configuration
│   │   ├── models/        # DRL models and database models
│   │   ├── services/      # Business logic and services
│   │   └── utils/         # Utility functions and helpers
│   ├── tests/
│   │   ├── unit/         # Unit tests
│   │   └── integration/  # Integration tests
│   ├── requirements.txt   # Python dependencies
│   └── main.py           # Application entry point
│
├── frontend/             # Next.js frontend application
│   ├── src/
│   │   ├── app/         # Next.js app directory
│   │   ├── components/  # React components
│   │   │   ├── common/  # Shared components
│   │   │   └── trading/ # Trading-specific components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── services/    # API services and data fetching
│   │   ├── types/       # TypeScript type definitions
│   │   └── utils/       # Utility functions
│   └── public/          # Static assets
│
└── docker/              # Docker configuration files
    ├── backend/         # Backend Docker setup
    └── frontend/        # Frontend Docker setup

```

## Features

- Deep Reinforcement Learning (DRL) based trading strategies
  - Proximal Policy Optimization (PPO)
  - Deep Q-Networks (DQN)
  - Ensemble strategy support
- Real-time market data integration
- Interactive trading dashboard
- Portfolio performance monitoring
- Risk management system

## Tech Stack

### Backend
- Python 3.9+
- FastAPI
- PyTorch
- Pandas & NumPy
- SQLAlchemy
- Alpha Vantage/Yahoo Finance API

### Frontend
- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Chart.js
- React Query

### DevOps
- Docker
- Docker Compose
- GitHub Actions
- Vercel deployment

## Setup Instructions

### Backend Setup
1. Create a virtual environment:
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

### Frontend Setup
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Development

### Running Tests
```bash
# Backend tests
cd backend
pytest

# Frontend tests
cd frontend
npm test
```

### Code Style
- Backend: Black formatter, flake8 linter
- Frontend: ESLint, Prettier

## Deployment Guide

### Frontend Deployment (Vercel)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the frontend:
   ```bash
   cd frontend
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Backend Deployment (Cloud Platform)

#### Option 1: DigitalOcean Deployment

1. Install DigitalOcean CLI (doctl):
   ```bash
   brew install doctl
   doctl auth init
   ```

2. Create App Platform deployment:
   ```bash
   doctl apps create --spec deployment/do-app-spec.yaml
   ```

#### Option 2: AWS Deployment

1. Install AWS CLI and configure credentials:
   ```bash
   pip install awscli
   aws configure
   ```

2. Deploy using AWS ECS:
   ```bash
   aws ecs create-cluster --cluster-name trading-bot
   # Deploy using docker-compose.yml with ecs-cli
   ecs-cli compose --project-name trading-bot service up
   ```

### Database Deployment

1. Create a managed PostgreSQL database (e.g., DigitalOcean Managed Database)

2. Update environment variables:
   ```bash
   # Update DATABASE_URL in backend/.env.production
   DATABASE_URL=postgresql://user:password@host:5432/tradingbot
   ```

3. Run migrations:
   ```bash
   cd backend
   alembic upgrade head
   ```

### SSL/Domain Setup

1. Purchase a domain and set up DNS records:
   - Frontend: trading-bot.your-domain.com
   - Backend API: api.trading-bot.your-domain.com

2. Configure SSL certificates:
   - Vercel handles SSL for frontend automatically
   - Use Let's Encrypt for backend:
     ```bash
     certbot certonly --nginx -d api.trading-bot.your-domain.com
     ```

### Environment Variables

1. Set up frontend environment variables in Vercel:
   - NEXT_PUBLIC_API_URL
   - [Other frontend env vars]

2. Set up backend environment variables:
   - DATABASE_URL
   - SECRET_KEY
   - ALPHA_VANTAGE_API_KEY
   - [Other backend env vars]

### Monitoring Setup

1. Install monitoring tools:
   ```bash
   # Backend monitoring
   pip install prometheus_client
   pip install grafana-api-client

   # Frontend monitoring
   npm install --save @vercel/analytics
   ```

2. Set up logging:
   - Use CloudWatch for AWS
   - Use DigitalOcean Monitoring for DO

### CI/CD Pipeline

1. Create GitHub Actions workflow:

```yaml
name: CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: |
          cd backend
          pip install -r requirements.txt
          pytest

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to production
        if: github.ref == 'refs/heads/main'
        run: |
          # Add deployment commands here
```

### Production Checklist

- [ ] Set up proper environment variables
- [ ] Configure database backups
- [ ] Set up monitoring and alerting
- [ ] Configure proper security groups and firewalls
- [ ] Set up SSL certificates
- [ ] Configure proper logging
- [ ] Set up CI/CD pipeline
- [ ] Configure auto-scaling rules
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure rate limiting
- [ ] Set up proper backup strategy

## Maintenance

### Backup Strategy

1. Database backups:
   ```bash
   # Automated daily backups
   pg_dump -U username -h hostname database_name > backup.sql
   ```

2. Application state backups:
   ```bash
   # Backup ML models and configurations
   tar -czf models_backup.tar.gz backend/models/
   ```

### Monitoring

1. Check application health:
   ```bash
   curl https://api.trading-bot.your-domain.com/health
   ```

2. Monitor system resources:
   ```bash
   htop  # CPU and memory usage
   df -h # Disk usage
   ```

### Scaling

1. Horizontal scaling:
   - Use load balancer
   - Add more application instances

2. Vertical scaling:
   - Upgrade server resources
   - Optimize database queries

## Security Considerations

1. API Security:
   - Rate limiting
   - JWT authentication
   - Input validation
   - CORS configuration

2. Database Security:
   - Regular security patches
   - Strong passwords
   - Connection encryption

3. Infrastructure Security:
   - Firewall rules
   - Regular security updates
   - Access control

## Troubleshooting

Common issues and solutions:

1. Database connection issues:
   ```bash
   # Check database connectivity
   pg_isready -h hostname -p 5432
   ```

2. Application errors:
   ```bash
   # Check application logs
   docker logs trading-bot-backend
   ```

3. Deployment issues:
   ```bash
   # Verify configurations
   docker-compose config
   ```

For more detailed information about each deployment step, refer to the respective platform's documentation:
- [Vercel Documentation](https://vercel.com/docs)
- [DigitalOcean Documentation](https://docs.digitalocean.com)
- [AWS Documentation](https://docs.aws.amazon.com)

## License

[MIT License](LICENSE)
