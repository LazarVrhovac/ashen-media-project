import Loader1 from '@/components/shared/Loader1';
import PostCard from '@/components/shared/PostCard';
import { useGetRecentPosts } from '@/lib/tanstack-query/queriesAndMutations';
import type { Models } from 'appwrite';

const Home = () => {
  const { data: posts, isPending: isPostLoading } = useGetRecentPosts();

  return (
    <div className='flex flex-1'>
      <div className='home-container'>
        <div className='home-posts'>
          <h2 className='h3-bold md:h2-bold text-left w-full'>Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader1 />
          ) : (
            <ul className='flex flex-col flex-1 gap-9 w-full'>
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
