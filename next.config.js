/** @type {import('next').NextConfig} */
const securityHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
]


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // emotion: true,
    styledComponents: true,
  },
  webpack: (config, context) => {
    // config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }], 
    })

    return config
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: '/:path*',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
