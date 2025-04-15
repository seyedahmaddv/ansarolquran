const stats = [
    { id: 1, name: 'تعداد دوره‌های آموزشی برگزارشده', value: '۲۵۰+' },
    { id: 2, name: 'تعداد فراگیران ثبت‌نام‌شده', value: '۱۰٬۰۰۰+' },
    { id: 3, name: 'تفاسیر ارائه‌شده از سوره‌ها', value: '۵۰+' },
  ]
  
  export default function Testimonials() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
            دستاوردهای انصارالقرآن
          </h2>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  