from enum import Enum
from sqlalchemy import String, Enum as SQLEnum
from sqlalchemy.orm import Mapped, mapped_column
from app.models.base import Base

class UserRole(str, Enum):
    ADMIN = "admin"
    EMPLOYEE = "employee"

class User(Base):
    
    __tablename__ = "users"

    full_name: Mapped[str] = mapped_column(String(100))
    
    email: Mapped[str] = mapped_column(String(255), index=True,unique=True, nullable=False)
    
    hashed_password: Mapped[str] = mapped_column(String(255), nullable=False)
    
    role: Mapped[UserRole] = mapped_column(SQLEnum(UserRole, name = "user_role_enum", native_enum = True), default=UserRole.EMPLOYEE)