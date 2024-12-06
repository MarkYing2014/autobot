from fastapi import APIRouter
from app.api.api_v1.endpoints import trading, market_data, portfolio

api_router = APIRouter()

api_router.include_router(trading.router, prefix="/trading", tags=["trading"])
api_router.include_router(market_data.router, prefix="/market-data", tags=["market-data"])
api_router.include_router(portfolio.router, prefix="/portfolio", tags=["portfolio"])
