export default function Custom404() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Page not found</p>
        <a href="/" style={{
          color: 'white',
          textDecoration: 'none',
          padding: '0.75rem 1.5rem',
          background: 'rgba(255,255,255,0.2)',
          borderRadius: '8px',
          display: 'inline-block'
        }}>Return to Login</a>
      </div>
    </div>
  )
}
