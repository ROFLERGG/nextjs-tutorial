import Link from 'next/link';

const Post = ({ post }) => {
  return (
    <div className="flex flex-col space-y-6 py-[60px]">
      <Link href="/" className="hover:underline underline-offset-2">
        Back
      </Link>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <strong>Author ID: {post.userId}</strong>
    </div>
  );
};

export default Post;
