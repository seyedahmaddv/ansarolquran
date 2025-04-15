import { BookOpenIcon, UserGroupIcon, ShieldCheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function QuranIntro() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern id="pattern" x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* متن معرفی */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-green-600 ">مرکز آموزش قرآن کریم</p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-loose">
                یادگیری قرآن با شیوه‌ای نوین و تاثیرگذار
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-8">
                انصارالقرآن با هدف ترویج فرهنگ قرآنی، بستری جامع برای آموزش تلاوت، حفظ، و تفسیر قرآن کریم فراهم کرده است.
                با بهره‌گیری از اساتید مجرب و محتوای آموزشی استاندارد، مسیر یادگیری را برای همه علاقمندان هموار کرده‌ایم.
              </p>
            </div>
          </div>
        </div>

        {/* تصویر معرفی */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="نمایی از برنامه قرآنی"
            src="/images/نمایی از برنامه قرانی.jpg" // تصویر مناسب خودتو جایگزین کن
            className="w-full max-w-4xl rounded-xl shadow-xl ring-1 ring-gray-300/10"
          />
        </div>

        {/* ویژگی‌ها */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-gray-700 lg:max-w-lg">
              <p>
                در انصارالقرآن، آموزش صرفاً حفظ و تلاوت نیست، بلکه مسیری برای فهم بهتر مفاهیم و کاربرد آن در زندگی است. ما محیطی معنوی، منظم و علمی برای علاقه‌مندان فراهم کرده‌ایم.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <BookOpenIcon className="mt-1 size-6 flex-none text-green-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">دوره‌های متنوع قرآنی</strong>: از سطح مبتدی تا پیشرفته شامل تجوید، حفظ، و تفسیر قرآن کریم.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon className="mt-1 size-6 flex-none text-green-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">اساتید برجسته و مجرب</strong>: بهره‌مندی از مربیان متخصص با سابقه‌ی تدریس در نهادهای معتبر.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 size-6 flex-none text-green-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">محیطی امن و معنوی</strong>: بستری مناسب برای آموزش اسلامی با تمرکز بر تربیت اخلاقی و معنوی.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                همراه ما باشید تا با نور قرآن، مسیر زندگی‌تان را روشن‌تر کنید.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">آموزش از راه دور</h2>
              <p className="mt-6">
                امکان شرکت در کلاس‌ها به صورت آنلاین برای تمام علاقمندان در سراسر کشور فراهم است. هر جا که هستید، با یک کلیک می‌توانید در مسیر یادگیری قرآن قدم بردارید.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
