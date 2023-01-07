/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	theme: 'nextra-theme-docs',
	themeConfig: './theme.config.js',
}

const withNextra = require('nextra')(nextConfig)

module.exports = withNextra()
