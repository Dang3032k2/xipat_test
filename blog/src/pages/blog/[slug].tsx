import { getBlogDetail, getBlogs } from "@/services";
import { Post } from "@/types";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
type Props = {
  post: Post;
};

export const getStaticPaths = async () => {
  const posts = await getBlogs();
  const paths = posts.map((item) => ({
    params: {
      slug: item.id + "",
    },
  }));
  return { paths, fallback: false };
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.slug;
  if (typeof id !== "string") {
    return { notFound: true };
  }
  const post = await getBlogDetail(id);
  return { props: { post } };
};
const BlogDetail = ({ post }: Props) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.body.slice(0, 150)} />
      </Head>
      <main>
        <div className="pt-12 pl-14">
          <h1 className="font-semibold">{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </main>
    </>
  );
};
export default BlogDetail;
