/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: false
	},
	compiler: {
		relay: {
			language: 'typescript'
		}
	},
	swcMinify: true,
};

module.exports = nextConfig;
