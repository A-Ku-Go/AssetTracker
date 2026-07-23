from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker
from app.core.config import settings

# 1. Create the asynchronous engine
# 'echo=True' will print all SQL queries to the terminal (great for debugging)
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=False,  
)

# 2. Create the session factory
# expire_on_commit=False ensures that we can still access the object's attributes 
# after the database transaction has been committed.
async_session_maker = async_sessionmaker(
    bind=engine, 
    expire_on_commit=False, 
    autoflush=False
)