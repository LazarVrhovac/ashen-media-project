import Loader1 from '@/components/shared/Loader1';
import PostStats from '@/components/shared/PostStats';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/context/AuthContext';
import {
  useDeletePost,
  useGetPostById,
} from '@/lib/tanstack-query/queriesAndMutations';
import { formatDate } from '@/lib/utils';
import { Link, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUserContext();

  const { data: post, isPending } = useGetPostById(id || '');

  const { mutate: deletePost } = useDeletePost();

  const handleDeletePost = () => {
    deletePost({ postId: id || '', imageId: post?.imageId });
    navigate(-1);
  };

  return (
    <div className='post_details-container'>
      {isPending ? (
        <Loader1 />
      ) : (
        <div className='post_details-card'>
          <img
            src={post?.imageUrl}
            alt='post-image'
            className='post_details-img'
          />
          <div className='post_details-info'>
            <div className='flex-between w-full'>
              <Link
                to={`/profile/${post?.creator.$id}`}
                className='flex items-center gap-3'
              >
                <img
                  src={
                    post?.creator?.imageUrl ||
                    '/assets/icons/default-picture.png'
                  }
                  alt='creator'
                  className='rounded-full w-10 h-10  lg:h-12 lg:w-12'
                />

                <div className='flex flex-col'>
                  <p className='base-medium lg:body-bold text-light-1'>
                    {post?.creator.name}
                  </p>
                  <div className='flex-center gap-2 text-light-3'>
                    <p className='subtle-semibold lg:small-regular'>
                      {formatDate(post?.$createdAt || '')}
                    </p>
                    -
                    <p className='subtle-semibold lg:small-regular'>
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>

              <div className='flex-center gap-4'>
                <Link
                  to={`/update-post/${post?.$id}`}
                  className={`${user.id !== post?.creator.$id && 'hidden'}`}
                >
                  <img
                    src='/assets/icons/edit.png'
                    alt='edit'
                    width={24}
                    height={24}
                  />
                </Link>

                <Button
                  onClick={handleDeletePost}
                  className={`ghost_details-delete_btn ${
                    user.id !== post?.creator.$id && 'hidden'
                  }`}
                  variant='ghost'
                >
                  <img
                    src='/assets/icons/delete.png'
                    alt='delete'
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
            </div>

            <hr className='border  w-full border-dark-4/80' />

            <div className='flex flex-col flex-1 w-full small-medium lg:base-regular'>
              <p>{post?.caption}</p>
              <ul className='flex gap-1 mt-2'>
                {post?.tags.map((tag: string) => (
                  <li key={tag} className='text-light-3'>
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className='w-full'>
              <PostStats post={post} userId={user.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
