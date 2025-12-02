import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Tech Blog</h1>
        <p className="text-gray-600 dark:text-gray-400">
          プログラミングや技術についての記事を書いています。
        </p>
      </section>

      {posts.length === 0 ? (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          <p>まだ記事がありません。</p>
          <p className="text-sm mt-2">
            content/posts/ に .mdx ファイルを追加してください。
          </p>
        </div>
      ) : (
        <section>
          <h2 className="text-xl font-semibold mb-6">記事一覧</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-b-0"
              >
                <Link href={`/posts/${post.slug}`} className="group">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <time dateTime={post.date}>
                      {format(new Date(post.date), "yyyy年MM月dd日", {
                        locale: ja,
                      })}
                    </time>
                    <span>{post.readingTime}</span>
                  </div>
                  {post.tags.length > 0 && (
                    <div className="flex gap-2 mt-3">
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
                </Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
