import Post from '@/app/components/post';

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}
async function fetchData(id) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const data = await res.json();
  return data;
}

const PostPage = async ({ params: { id } }) => {
  const post = await fetchData(id);
  return (
    <div className="flex flex-1 flex-col justify-center min-h-full">
      <Post post={post} />
    </div>
  );
};

export default PostPage;
