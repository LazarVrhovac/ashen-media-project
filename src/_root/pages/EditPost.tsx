import PostForm from '@/components/forms/PostForm';
import Loader1 from '@/components/shared/Loader1';
import { useGetPostById } from '@/lib/tanstack-query/queriesAndMutations';

import { useParams } from 'react-router-dom';

const EditPost = () => {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || '');

  if (isPending) return <Loader1 />;

  return (
    <div className='flex flex-1'>
      <div className='common-container'>
        <div className='max-w-5x1 flex-start gap-3 justify-start w-full'>
          <img
            src='/assets/icons/create.png'
            alt='add'
            width={48}
            height={48}
          />
          <h2 className='h3-bold md:h2-bold text-left w-full'>Edit Post</h2>
        </div>

        <PostForm action='Update' post={post} />
      </div>
    </div>
  );
};

export default EditPost;
