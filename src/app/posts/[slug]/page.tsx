import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "@/components/MDXRemote";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.title} | Tech Blog`,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500 mb-4">
          <time dateTime={post.date}>
            {format(new Date(post.date), "yyyy年MM月dd日", { locale: ja })}
          </time>
          <span>{post.readingTime}</span>
        </div>
        {post.tags.length > 0 && (
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
