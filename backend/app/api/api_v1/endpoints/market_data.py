from fastapi import APIRouter, Query
from typing import List, Optional
from datetime import datetime, timedelta
from app.services.market_data_service import MarketDataService

router = APIRouter()
market_data_service = MarketDataService()

@router.get("/historical/{symbol}")
async def get_historical_data(
    symbol: str,
    start_date: Optional[datetime] = None,
    end_date: Optional[datetime] = None,
    interval: str = Query("1d", regex="^(1m|5m|15m|30m|1h|1d)$")
):
    """Get historical market data for a symbol"""
    if not start_date:
        start_date = datetime.now() - timedelta(days=365)
    if not end_date:
        end_date = datetime.now()
        
    return await market_data_service.get_historical_data(
        symbol=symbol,
        start_date=start_date,
        end_date=end_date,
        interval=interval
    )

@router.get("/quote/{symbol}")
async def get_quote(symbol: str):
    """Get current market quote for a symbol"""
    return await market_data_service.get_quote(symbol)

@router.get("/symbols")
async def get_available_symbols(
    search: Optional[str] = None,
    limit: int = Query(default=10, le=100)
):
    """Search available trading symbols"""
    return await market_data_service.search_symbols(search, limit)

@router.get("/indicators/{symbol}")
async def get_technical_indicators(
    symbol: str,
    indicators: List[str] = Query(...),
    period: int = Query(default=14, ge=1, le=200)
):
    """Get technical indicators for a symbol"""
    return await market_data_service.get_technical_indicators(
        symbol=symbol,
        indicators=indicators,
        period=period
    )
