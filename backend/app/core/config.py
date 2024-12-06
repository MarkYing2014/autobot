from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # API Settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "DRL Trading Bot"
    
    # Security
    SECRET_KEY: str = "your-secret-key-here"  # Change in production
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    
    # Market Data API
    ALPHA_VANTAGE_API_KEY: Optional[str] = None
    YAHOO_FINANCE_API_KEY: Optional[str] = None
    
    # Database
    DATABASE_URL: Optional[str] = None
    
    # Trading Settings
    TRADING_ENABLED: bool = False
    MAX_POSITION_SIZE: float = 0.1  # 10% of portfolio per position
    RISK_FREE_RATE: float = 0.02  # 2% annual risk-free rate
    
    # Model Settings
    MODEL_PATH: str = "models"
    LOOKBACK_WINDOW_SIZE: int = 20
    TRAIN_TEST_SPLIT: float = 0.8
    
    class Config:
        case_sensitive = True
        env_file = ".env"

settings = Settings()
