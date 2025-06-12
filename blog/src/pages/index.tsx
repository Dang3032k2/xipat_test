import Link from "next/link";
import Head from "next/head";
import { Post } from "@/types";
import { getBlogs } from "@/services";

export async function getStaticProps() {
  const posts = await getBlogs();
  return {
    props: {
      posts,
    },
  };
}
const BlogList = ({ posts }: { posts: Post[] }) => {
  return (
    <>
      <Head>
        <title>Danh sách Blog</title>
        <meta name="description" content="Danh sách blog demo bằng Next.js" />
      </Head>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border p-4 rounded hover:shadow">
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-xl font-semibold cursor-pointer hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-600 line-clamp-2">{post.body}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};
export default BlogList;
