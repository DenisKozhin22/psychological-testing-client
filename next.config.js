/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	trailingSlash: false,
	env: {
		BASE_URL: 'http://localhost:5000/',
	},
}

module.exports = nextConfig
