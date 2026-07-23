from pydantic import BaseModel, EmailStr, ConfigDict
from datetime import datetime
import uuid

# 1. The Base Schema
class UserBase(BaseModel):
    """
    Shared properties for all User schemas.
    """
    email: EmailStr

# 2. The Creation Schema (Incoming Data)
class UserCreate(UserBase):
    """
    Properties required to create a new user.
    Inherits 'email' from UserBase.
    """
    password: str

# 3. The Response Schema (Outgoing Data)
class UserResponse(UserBase):
    """
    Properties to return to the client.
    Inherits 'email' from UserBase.
    """
    id: uuid.UUID
    is_active: bool
    created_at: datetime

    # This config tells Pydantic to read data even if it's not a dict, 
    # allowing it to directly parse the SQLAlchemy model instances.
    model_config = ConfigDict(from_attributes=True)