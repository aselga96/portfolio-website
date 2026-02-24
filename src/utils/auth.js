// Security configuration - move these to environment variables in production
const ADMIN_CREDENTIALS = {
  username: 'aselga',
  // Hashed password using bcrypt (this is a demo hash - use proper hashing in production)
  passwordHash: '$2b$10$demo.hash.for.production.use'
}

// Simple hash function for demo (use bcrypt in production)
const simpleHash = (str) => {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return hash.toString()
}

// Verify credentials with salted hash
const verifyCredentials = (username, password) => {
  const salt = 'your-secret-salt-key' // Move to environment variable
  const hashedPassword = simpleHash(password + salt)
  
  return username === ADMIN_CREDENTIALS.username && 
         hashedPassword === simpleHash('Selbas96!' + salt)
}

export { verifyCredentials, ADMIN_CREDENTIALS }
