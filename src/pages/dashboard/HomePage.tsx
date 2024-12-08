import { useState, useEffect } from 'react';
import PostsTable from '../../ui/customers/table';
import Search from '../../ui/search';
import { PostsTableSkeleton } from '../../ui/skeletons';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=100'
        );
        const result = await response.json();
        setPosts(result);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <div className="">
        <h1 className="text-left font-bold p-2"> Home Page </h1>
        <div className="flex flex-row justify-between space-x-2">
          <Search placeholder=" Enter any infos related to a post for sorting" />
        </div>
      </div>
      {loading ? (
        <PostsTableSkeleton />
      ) : (
        <PostsTable posts={posts.length > 0 ? posts : []} />
      )}
    </main>
  );
}
