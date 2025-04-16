import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'e6nvd94h',
  dataset: 'production', // یا هر دیتاست دیگری که استفاده می‌کنید
  apiVersion: '2023-05-03', // تاریخ امروز یا نسخه API که می‌خواهید استفاده کنید
  useCdn: process.env.NODE_ENV === 'production',
})