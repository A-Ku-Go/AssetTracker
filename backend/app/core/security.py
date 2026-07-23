from datetime import datetime, timedelta, timezone
import jwt
from passlib.context import CryptContext

from app.core.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

ALGORITHM = "HS256"

def get_password_hash(password: str) -> str:
    """
    Takes a plain-text password and returns a securely salted bcrypt hash.
    """
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    compares plain-text password with stored hash.
    Returns True if they match, False otherwise.
    """
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: timedelta | None = None) -> str:
    """
    Generates a JSON Web Token (JWT).
    
    1. Make a copy of the incoming 'data' dictionary.
    2. Calculate an expiration time (UTC) using expires_delta OR the default from settings.
    3. Add the expiration time to the dictionary under the key "exp".
    4. Encode the token using jwt.encode(), passing the data, settings.SECRET_KEY, and the ALGORITHM.
    5. Return the resulting string.
    """
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt