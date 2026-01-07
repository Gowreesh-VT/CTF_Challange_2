/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static export for deployment to Netlify/GitHub Pages
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Set base path if deploying to a subdirectory (remove if deploying to root)
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
