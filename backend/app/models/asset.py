from sqlalchemy import Boolean, ForeignKey, String
from app.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from typing import Optional

class Asset(Base):
    
    __tablename__ = "assets"
    
    name: Mapped[str] = mapped_column(String(150), nullable = False)
    
    serial_number: Mapped[str] = mapped_column(String(100), index = True, nullable = False, unique = True)
    
    status: Mapped[str] = mapped_column(String(50), default = "active")
    
    is_deleted: Mapped[bool] = mapped_column(Boolean, default = False, nullable = False)
    
    location_id: Mapped[Optional[int]] = mapped_column(ForeignKey("locations.id", ondelete="SET NULL"))