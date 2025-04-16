import { client } from '../../../lib/sanity';
import { formatJalaliDateText } from '../../../lib/date-utils';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { PortableTextBlock } from '@portabletext/types';
import Image from 'next/image';

interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    categories?: {
        title: string;
        slug?: {
            current?: string;
        };
    }[];
    mainImage?: {
        asset?: {
            _ref: string;
            url: string;
        };
    };
    author?: {
        name: string;
        image?: {
            asset?: {
                _ref: string;
                url: string;
            };
        };
        bio?: any[];
        slug?: {
            current?: string;
        };
    };
    body: PortableTextBlock[];
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const { slug } = params;

    const post: Post | null = await client.fetch(
        `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
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
        bio,
        slug
      },
      body
    }
  `,
        { slug }
    );

    if (!post) {
        return (
            <div className="mx-auto max-w-3xl px-6 py-16">
                <h1 className="text-2xl font-bold">پست مورد نظر یافت نشد</h1>
                <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
                    بازگشت به وبلاگ
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {post.title}
                    </h1>

                    <div className="mt-4 flex items-center gap-x-4 text-sm">
                        <time dateTime={post.publishedAt} className="text-gray-500 ml-2">
                            {formatJalaliDateText(post.publishedAt)}
                        </time>
                        <div className="flex gap-2">
                            {post.categories?.map((category, index) =>
                                category?.slug?.current ? (
                                    <Link
                                        key={index}
                                        href={`/category/${category.slug.current}`}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {category.title}
                                    </Link>
                                ) : null
                            )}
                        </div>
                    </div>

                    {post.mainImage?.asset?.url && (
                        <div className="relative w-full mt-8 overflow-hidden rounded-lg">
                            <Image
                                src={post.mainImage.asset.url}
                                alt={post.title}
                                width={800} // عرض تصویر (به پیکسل)
                                height={450} // ارتفاع تصویر
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    <div className="mt-8 prose prose-lg prose-indigo prose-md max-w-none text-gray-800">
                        <PortableText value={post.body} />
                    </div>

                    {post.author && (
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center gap-x-4">
                                {post.author.image?.asset?.url && (
                                    <Image
                                        src={post.author.image.asset.url}
                                        alt={post.author.name}
                                        width={800} // عرض تصویر (به پیکسل)
                                        height={450} // ارتفاع تصویر
                                        className="size-12 rounded-full bg-gray-50"
                                    />
                                )}
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {post.author.slug?.current ? (
                                            <Link href={`/author/${post.author.slug.current}`}>
                                                {post.author.name}
                                            </Link>
                                        ) : (
                                            post.author.name
                                        )}
                                    </h3>
                                    {post.author.bio && (
                                        <div className="mt-2 text-sm text-gray-600 prose">
                                            <PortableText value={post.author.bio} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    const slugs = await client.fetch(`*[_type == "post" && defined(slug.current)].slug.current`);

    return slugs.map((slug: string) => ({
        slug,
    }));
}

export const revalidate = 3600;
