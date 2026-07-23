from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession

# Import your session maker from Day 1 
# (Adjust this import path if your session maker is named/located differently)
from app.core.database import async_session_maker

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """
    Creates a new database session for a single request and closes it once the request is finished.
    """
    async with async_session_maker() as session:
        yield session