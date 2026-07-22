from app.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Boolean, ForeignKey
from typing import Optional

class Location(Base):
    
    __tablename__ = "locations"
    
    name: Mapped[str] = mapped_column(String(100), unique = True, index = True, nullable = False)
    
    slug: Mapped[str] = mapped_column(String(120), unique = True, index = True, nullable = False)
    
    address: Mapped[str] = mapped_column(String(255), nullable = False)
    
    is_active: Mapped[bool] = mapped_column(Boolean, default = True, nullable = False)
    
    parent_id: Mapped[Optional[int]] = mapped_column(
        ForeignKey("locations.id", ondelete="CASCADE"), 
        nullable = True
    )