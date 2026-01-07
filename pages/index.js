import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Login.module.css'

export default function Home() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [flag, setFlag] = useState('')
  
  // Security Update 2025-12-15: Added input sanitization to prevent SQL injection attacks
  // All user inputs are now properly sanitized before database queries
  // TODO: Review password field sanitization - DONE ✓
  // TODO: Review email field sanitization - DONE ✓
  // TODO: Review username field sanitization - ... wait, did we do this one? I think so? 🤔
  // Anyway, we're good. Triple-checked everything. This login is now 100% secure! 💪
  
  const handleLogin = (e) => {
    e.preventDefault()
    setLoginError('')
    setLoginSuccess(false)

    const sqlInjectionPatterns = [
      "' OR '1'='1",
      "' OR 1=1 --",
      "admin'--",
      "admin' --",
      "admin' OR '1'='1",
    ]

    let isInjected = false
    
    for (let pattern of sqlInjectionPatterns) {

      if (username.toLowerCase().includes(pattern.toLowerCase())) {
        isInjected = true
        break
      }
    }

    const injectionKeywords = /(\bor\b|\band\b|union|select|drop|insert|delete|update|--|#|\/\*|\*\/)/gi
    const hasQuote = username.includes("'") || username.includes('"')
    const hasInjectionKeyword = injectionKeywords.test(username)

    if (isInjected || (hasQuote && hasInjectionKeyword)) {
      const secretFlag = 'VV{5ql1_15_n07_4_my7h}'
      const encodedFlag = btoa(secretFlag)
      
      setFlag(encodedFlag)
      setLoginSuccess(true)
    } else {

      setLoginError('Invalid credentials. Access denied.')
    }

    setPassword('')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>SecureAuth Portal</title>
        <meta name="description" content="Employee Login Portal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.loginCard}>
          <div className={styles.header}>
            <h1 className={styles.title}>SecureAuth</h1>
            <p className={styles.subtitle}>Employee Login Portal</p>
          </div>

          {!loginSuccess ? (
            <form onSubmit={handleLogin} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="username" className={styles.label}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={styles.input}
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  placeholder="Enter your password"
                  required
                />
              </div>

              {loginError && (
                <div className={styles.error}>
                  {loginError}
                </div>
              )}

              <button type="submit" className={styles.button}>
                Login
              </button>

              <div className={styles.footer}>
                <a href="#" className={styles.link}>Forgot password?</a>
              </div>
            </form>
          ) : (
            <div className={styles.success}>
              <div className={styles.successIcon}>✓</div>
              <h2 className={styles.successTitle}>Login Successful</h2>
              <p className={styles.successMessage}>Welcome back, Administrator!</p>
              
              <div className={styles.flagContainer}>
                <p className={styles.flagLabel}>Access Token:</p>
                <div className={styles.flagBox}>
                  <code className={styles.flagCode}>{flag}</code>
                </div>
                <p className={styles.flagHint}>Store this token securely</p>
              </div>

              <button 
                onClick={() => {
                  setLoginSuccess(false)
                  setUsername('')
                  setFlag('')
                }}
                className={styles.logoutButton}
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <footer className={styles.pageFooter}>
          <p>© 2026 SecureAuth Systems. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}
