// Security Configuration
// IMPORTANT: Move these to environment variables in production!

export const SECURITY_CONFIG = {
  // Session management
  SESSION_DURATION: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 30 * 60 * 1000, // 30 minutes in milliseconds
  
  // Password requirements
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_REQUIRE_UPPERCASE: true,
  PASSWORD_REQUIRE_LOWERCASE: true,
  PASSWORD_REQUIRE_NUMBERS: true,
  PASSWORD_REQUIRE_SYMBOLS: true,
  
  // Rate limiting
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: 100,
  
  // Security headers
  ENABLE_CSP: true,
  ENABLE_XSS_PROTECTION: true,
  ENABLE_FRAME_PROTECTION: true,
  
  // Admin credentials (move to environment variables)
  ADMIN_USERNAME: process.env.REACT_APP_ADMIN_USERNAME || 'aselga',
  ADMIN_PASSWORD_HASH: process.env.REACT_APP_ADMIN_PASSWORD_HASH || 'demo-hash-replace-in-production',
  SALT_KEY: process.env.REACT_APP_SALT_KEY || 'your-secret-salt-key-change-in-production'
}

export const SECURITY_HEADERS = {
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'",
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
}

export const validatePassword = (password) => {
  const config = SECURITY_CONFIG
  const errors = []
  
  if (password.length < config.PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${config.PASSWORD_MIN_LENGTH} characters long`)
  }
  
  if (config.PASSWORD_REQUIRE_UPPERCASE && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }
  
  if (config.PASSWORD_REQUIRE_LOWERCASE && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }
  
  if (config.PASSWORD_REQUIRE_NUMBERS && !/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }
  
  if (config.PASSWORD_REQUIRE_SYMBOLS && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}
