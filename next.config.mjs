let userConfig = undefined
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs')
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import("./v0-user-next.config");
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',    // <--- this line is essential for out to create!
  trailingSlash: true, // This line is beneficial
  // The following lines for basePath and assetPrefix should remain commented out
  // for your URL (https://publicopinionanalyticslab.github.io/),
  // as the site is served from the domain root.
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
   // webpackBuildWorker: true,
   // parallelServerBuildTraces: true,
   // parallelServerCompiles: true,
  },
};



if (userConfig) {
  // ESM imports will have a "default" property
  const config = userConfig.default || userConfig

  for (const key in config) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      }
    } else {
      nextConfig[key] = config[key]
    }
  }
}

export default nextConfig
