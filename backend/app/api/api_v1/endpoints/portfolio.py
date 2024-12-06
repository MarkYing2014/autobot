from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from datetime import datetime, timedelta
from app.services.portfolio_service import PortfolioService

router = APIRouter()
portfolio_service = PortfolioService()

@router.get("/summary")
async def get_portfolio_summary() -> Dict[str, Any]:
    """Get current portfolio summary"""
    return await portfolio_service.get_summary()

@router.get("/positions")
async def get_portfolio_positions() -> List[Dict[str, Any]]:
    """Get current portfolio positions"""
    return await portfolio_service.get_positions()

@router.get("/performance")
async def get_portfolio_performance(
    timeframe: str = "1d",  # 1d, 1w, 1m, 3m, 1y, all
) -> Dict[str, Any]:
    """Get portfolio performance metrics"""
    try:
        return await portfolio_service.get_performance(timeframe)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/trades")
async def get_trade_history(
    start_date: datetime = None,
    end_date: datetime = None,
    limit: int = 50
) -> List[Dict[str, Any]]:
    """Get trading history"""
    if not start_date:
        start_date = datetime.now() - timedelta(days=30)
    if not end_date:
        end_date = datetime.now()
        
    return await portfolio_service.get_trade_history(
        start_date=start_date,
        end_date=end_date,
        limit=limit
    )

@router.get("/metrics")
async def get_portfolio_metrics() -> Dict[str, Any]:
    """Get portfolio performance metrics"""
    return await portfolio_service.get_metrics()
