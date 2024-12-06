from fastapi import APIRouter, HTTPException, Depends
from typing import List, Dict, Any
from app.services.trading_service import TradingService
from app.models.schemas.trading import TradingStatus, TradingConfig

router = APIRouter()
trading_service = TradingService()

@router.post("/start")
async def start_trading(config: TradingConfig):
    try:
        status = await trading_service.start_trading(config)
        return {"status": status, "message": "Trading started successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/stop")
async def stop_trading():
    try:
        status = await trading_service.stop_trading()
        return {"status": status, "message": "Trading stopped successfully"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/status")
async def get_trading_status() -> TradingStatus:
    return await trading_service.get_status()

@router.get("/positions")
async def get_positions() -> List[Dict[str, Any]]:
    return await trading_service.get_positions()

@router.get("/performance")
async def get_performance():
    return await trading_service.get_performance()
