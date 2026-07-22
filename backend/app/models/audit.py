from app.models.base import Base
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Text, ForeignKey
from typing import Optional

class AuditLog(Base):
    
    __tablename__ = "audit_logs"
    
    asset_id: Mapped[int] = mapped_column(ForeignKey("assets.id", ondelete="CASCADE"))
    
    user_id: Mapped[Optional[int]] = mapped_column(ForeignKey("users.id", ondelete="SET NULL"))
    
    action: Mapped[str] = mapped_column(String(50), nullable = False)
    
    changes: Mapped[str] = mapped_column(Text, nullable = False)