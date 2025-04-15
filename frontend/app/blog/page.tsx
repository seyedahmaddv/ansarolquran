import Image from 'next/image';
import Link from 'next/link';

// نمونه داده وبلاگ
const blogPosts = [
  {
    id: 1,
    title: 'فضیلت تلاوت قرآن کریم در ماه رمضان',
    excerpt: 'قرآن کریم در ماه مبارک رمضان جایگاه ویژه‌ای دارد و تلاوت آن از بهترین اعمال در این ماه است...',
    content: 'محتوای کامل مقاله در مورد فضیلت تلاوت قرآن در ماه رمضان...',
    date: '۱۰ فروردین ۱۴۰۴',
    author: 'استاد علی محمدی',
    category: 'ماه رمضان',
    image: '/api/placeholder/800/500',
  },
  {
    id: 2,
    title: 'اصول و روش‌های صحیح تلاوت قرآن',
    excerpt: 'برای تلاوت صحیح قرآن کریم، رعایت اصولی چون تجوید، وقف و ابتدا، مخارج حروف و... ضروری است...',
    content: 'محتوای کامل مقاله در مورد اصول تلاوت صحیح قرآن...',
    date: '۵ فروردین ۱۴۰۴',
    author: 'استاد حسین رضایی',
    category: 'آموزش قرآن',
    image: '/api/placeholder/800/500',
  },
  {
    id: 3,
    title: 'تفسیر سوره حمد (الفاتحه) - بخش اول',
    excerpt: 'سوره فاتحه اولین سوره قرآن کریم و دارای ۷ آیه است که به آن ام‌الکتاب نیز گفته می‌شود...',
    content: 'محتوای کامل مقاله در مورد تفسیر سوره حمد...',
    date: '۲۸ اسفند ۱۴۰۳',
    author: 'دکتر احمد حسینی',
    category: 'تفسیر قرآن',
    image: '/api/placeholder/800/500',
  },
  {
    id: 4,
    title: 'روش‌های موثر برای حفظ قرآن کریم',
    excerpt: 'حفظ قرآن کریم نیازمند برنامه‌ریزی دقیق و استفاده از روش‌های موثر است...',
    content: 'محتوای کامل مقاله در مورد روش‌های حفظ قرآن...',
    date: '۲۰ اسفند ۱۴۰۳',
    author: 'استاد محمدرضا کریمی',
    category: 'حفظ قرآن',
    image: '/api/placeholder/800/500',
  },
  {
    id: 5,
    title: 'آشنایی با علم تجوید و اهمیت آن در قرائت قرآن',
    excerpt: 'تجوید علمی است که به بررسی و آموزش نحوه صحیح تلفظ حروف و کلمات قرآن می‌پردازد...',
    content: 'محتوای کامل مقاله در مورد علم تجوید...',
    date: '۱۵ اسفند ۱۴۰۳',
    author: 'استاد زهرا محمدی',
    category: 'تجوید',
    image: '/api/placeholder/800/500',
  },
  {
    id: 6,
    title: 'فواید روان‌شناختی و سلامت روان در انس با قرآن',
    excerpt: 'انس با قرآن کریم و تلاوت منظم آن تاثیرات مثبت فراوانی بر سلامت روان و آرامش انسان دارد...',
    content: 'محتوای کامل مقاله در مورد فواید روان‌شناختی قرآن...',
    date: '۱۰ اسفند ۱۴۰۳',
    author: 'دکتر فاطمه احمدی',
    category: 'سلامت و قرآن',
    image: '/api/placeholder/800/500',
  },
];

export default function Blog() {
  // دسته‌بندی‌های منحصر به فرد
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  return (
    <div>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">وبلاگ انصارالقرآن</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">آخرین مقالات، مطالب آموزشی و تفسیرهای قرآنی</p>
          
          {/* فیلتر دسته‌بندی */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-gray-700 dark:text-gray-300 ml-2">دسته‌بندی‌ها:</span>
            <button className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">همه</button>
            {categories.map((category, index) => (
              <button key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                {category}
              </button>
            ))}
          </div>
          
          {/* لیست مقالات */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-2 py-1 rounded-md text-xs">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.author}</p>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                    ادامه مطلب &larr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* صفحه‌بندی */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2 space-x-reverse">
              <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button className="bg-primary-600 text-white w-10 h-10 rounded-md flex items-center justify-center">1</button>
              <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600">2</button>
              <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600">3</button>
              <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-10 h-10 rounded-md flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
}