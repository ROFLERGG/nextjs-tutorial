import Link from 'next/link';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default async function Home() {
  const posts = await fetchData();

  return (
    <div className="flex flex-col space-y-6 py-[60px]">
      <h1 className="text-2xl font-bold">Home</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} className="max-w-[800px] w-fit p-4 flex flex-col space-y-3 bg-neutral-600 rounded-lg">
            <h2 className="text-xl w-fit font-bold">{post.title}</h2>
            <p className="w-fit text-neutral-200">{post.body}</p>
            <Link href={`/post/` + post.id} className="w-fit hover:underline">
              More
            </Link>
          </div>
        );
      })}
    </div>
  );
}
