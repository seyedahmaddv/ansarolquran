/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ اجازه می‌ده تصاویر بدون بهینه‌سازی لود بشن
  },
}

export default nextConfig
