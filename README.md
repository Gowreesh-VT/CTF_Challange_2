# CTF Login Challenge

⚠️ **SECURITY WARNING: This application is INTENTIONALLY VULNERABLE** ⚠️

This is a Capture The Flag (CTF) educational challenge demonstrating a simulated SQL injection vulnerability. **DO NOT use this code in production or real applications.**

## Purpose

This project is designed to teach security researchers and students about SQL injection vulnerabilities in a safe, controlled environment.

## Challenge Description

This is a frontend-only Next.js application that simulates a vulnerable login system. The application contains an intentional security flaw for educational purposes.

## Project Structure

```
CTF_Challange_2/
├── pages/
│   ├── _app.js           # Next.js app wrapper
│   ├── _document.js      # HTML document structure
│   └── index.js          # Main login page with vulnerable logic
├── styles/
│   ├── globals.css       # Global styles
│   └── Login.module.css  # Login page styles
├── next.config.js        # Next.js configuration (static export)
├── package.json          # Dependencies
└── README.md            # This file
```

## Setup and Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

## How It Works

The application simulates a SQL injection vulnerability entirely in the frontend:

1. **No Backend**: Everything runs in the browser
2. **Simulated Database Query**: The login logic pretends to execute SQL queries
3. **Vulnerable Input**: The username field is checked for SQL injection patterns
4. **Bypass Authentication**: If an injection pattern is detected, login succeeds
5. **Flag Reveal**: Successful injection reveals a Base64-encoded flag

## Technical Details

- **Framework**: Next.js 14 (Pages Router)
- **Deployment**: Static export for Netlify/GitHub Pages
- **Authentication**: Client-side only (intentionally insecure)
- **Flag**: Base64-encoded string revealed on successful injection

## Educational Use Only

This code demonstrates:
- Why input validation is critical
- How SQL injection attacks work
- The importance of prepared statements and parameterized queries
- Server-side authentication requirements

**Never implement authentication in frontend-only code in real applications.**

## License

See LICENSE file for details.

## Disclaimer

This software is provided for educational and training purposes only. The authors are not responsible for any misuse of this code. Always follow responsible disclosure practices and only test on systems you own or have explicit permission to test.
