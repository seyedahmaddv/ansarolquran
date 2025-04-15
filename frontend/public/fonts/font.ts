import localFont from 'next/font/local'

export const iranSans = localFont({
  src: [
    {
      path: '/fonts/IRANSansXFaNum-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '/fonts/IRANSansXFaNum-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-iransans',
  display: 'swap',
})
