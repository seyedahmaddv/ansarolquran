// app/blog/page.tsx
import Link from 'next/link';
import { client } from '../../lib/sanity';
import { formatJalaliDate, formatHijriDate } from '../../lib/date-utils';

// تعریف تایپ برای پست
interface Post {
  _id: string;
  title: string;
  excerpt?: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  categories?: {
    title: string;
    slug: {
      current: string;
    };
  }[];
  mainImage?: {
    asset: {
      _ref: string;
      url: string;
    };
  };
  author?: {
    name: string;
    image?: {
      asset: {
        _ref: string;
        url: string;
      };
    };
    role?: string;
    slug?: {
      current: string;
    };
  };
}

export default async function Blog() {
  // دریافت پست‌ها از Sanity با اطلاعات کامل‌تر
  const posts: Post[] = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      excerpt,
      slug,
      publishedAt,
      categories[]->{title, slug},
      mainImage {
        asset->{
          _ref,
          url
        }
      },
      author->{
        name,
        image {
          asset->{
            _ref,
            url
          }
        },
        role,
        slug
      }
    }
  `);

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">وبلاگ انصارالقرآن</h2>
          <p className="mt-2 text-lg/8 text-gray-600">مقالات و مطالب قرآنی</p>
        </div>
        
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post._id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.publishedAt} className="text-gray-500 ml-2">
                  {formatJalaliDate(post.publishedAt)}
                </time>
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {formatHijriDate(post.publishedAt)}
                </time>
                
                {post.categories && post.categories.length > 0 && post.categories[0] && (
                  <Link
                    href={`/category/${post.categories[0].slug?.current || '#'}`}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.categories[0].title}
                  </Link>
                )}
              </div>
              
              {post.mainImage && post.mainImage.asset && (
                <div className="relative w-full h-48 mt-4 overflow-hidden rounded-lg">
                  <img 
                    src={post.mainImage.asset.url} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              <div className="group relative mt-3">
                <h3 className="text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${post.slug.current}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.excerpt}
                </p>
              </div>
              
              {post.author && (
                <div className="relative mt-8 flex items-center gap-x-4">
                  {post.author.image && post.author.image.asset && (
                    <img 
                      src={post.author.image.asset.url} 
                      alt={post.author.name} 
                      className="size-10 rounded-full bg-gray-50" 
                    />
                  )}
                  <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                      {post.author.slug ? (
                        <Link href={`/author/${post.author.slug.current}`}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </Link>
                      ) : (
                        post.author.name
                      )}
                    </p>
                    {post.author.role && (
                      <p className="text-gray-600">{post.author.role}</p>
                    )}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// استاتیک ساختن صفحه با بازتولید هر ساعت
export const revalidate = 3600;