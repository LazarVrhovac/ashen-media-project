import GridPostList from '@/components/shared/GridPostList';
import Loader1 from '@/components/shared/Loader1';
import { useGetCurrentUser } from '@/lib/tanstack-query/queriesAndMutations';

const LikedPosts = () => {
  const { data: currentUser } = useGetCurrentUser();

  if (!currentUser)
    return (
      <div className='flex-center w-full h-full'>
        <Loader1 />
      </div>
    );

  return (
    <>
      {currentUser.liked.length === 0 && (
        <p className='text-light-4'>No liked posts</p>
      )}

      <GridPostList posts={currentUser.liked} showStats={false} />
    </>
  );
};

export default LikedPosts;
