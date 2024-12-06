import yfinance as yf
import pandas as pd
import numpy as np
from typing import List, Dict, Any

class MarketDataHandler:
    def __init__(self):
        self.data_cache = {}
    
    def fetch_historical_data(
        self,
        symbol: str,
        period: str = "1y",
        interval: str = "1d"
    ) -> pd.DataFrame:
        """
        Fetch historical market data for a given symbol
        """
        try:
            ticker = yf.Ticker(symbol)
            df = ticker.history(period=period, interval=interval)
            self.data_cache[symbol] = df
            return df
        except Exception as e:
            print(f"Error fetching data for {symbol}: {str(e)}")
            return pd.DataFrame()
    
    def prepare_state(
        self,
        symbol: str,
        lookback_period: int = 10
    ) -> np.ndarray:
        """
        Prepare state representation for the DRL agent
        """
        if symbol not in self.data_cache:
            self.fetch_historical_data(symbol)
            
        df = self.data_cache[symbol]
        if df.empty:
            return np.zeros((lookback_period, 5))  # Default shape for OHLCV
            
        # Calculate technical indicators
        df['Returns'] = df['Close'].pct_change()
        df['SMA_5'] = df['Close'].rolling(window=5).mean()
        df['SMA_20'] = df['Close'].rolling(window=20).mean()
        df['RSI'] = self.calculate_rsi(df['Close'])
        
        # Select features for state
        features = ['Open', 'High', 'Low', 'Close', 'Volume',
                   'Returns', 'SMA_5', 'SMA_20', 'RSI']
        
        # Get the last lookback_period days
        state = df[features].iloc[-lookback_period:].values
        
        # Normalize the state
        state = (state - np.mean(state, axis=0)) / (np.std(state, axis=0) + 1e-8)
        
        return state
    
    @staticmethod
    def calculate_rsi(prices: pd.Series, period: int = 14) -> pd.Series:
        """Calculate RSI technical indicator"""
        delta = prices.diff()
        gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
        
        rs = gain / loss
        rsi = 100 - (100 / (1 + rs))
        return rsi
