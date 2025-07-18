import PostForm from '@/components/forms/PostForm';

const CreatePost = () => {
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
          <h2 className='h3-bold md:h2-bold text-left w-full'>Create Post</h2>
        </div>

        <PostForm action='Create' />
      </div>
    </div>
  );
};

export default CreatePost;
