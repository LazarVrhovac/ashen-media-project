import Loader1 from '@/components/shared/Loader1';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useGetUsers } from '@/lib/tanstack-query/queriesAndMutations';
import type { Models } from 'appwrite';
import { Link } from 'react-router-dom';

type UserCardProps = {
  user: Models.Document;
};

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link to={`/profile/${user.$id}`} className='user-card'>
      <img
        src={user.imageUrl || '/assets/icons/profile-placeholder.svg'}
        alt='creator'
        className='rounded-full w-14 h-14'
      />

      <div className='flex-center flex-col gap-1'>
        <p className='base-medium text-light-1 text-center line-clamp-1'>
          {user.name}
        </p>
        <p className='small-regular text-light-3 text-center line-clamp-1'>
          @{user.username}
        </p>
      </div>

      <Button type='button' size='sm' className='shad-button_primary px-5'>
        Go to Profile
      </Button>
    </Link>
  );
};

const AllUsers = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: 'Something went wrong.' });

    return;
  }

  return (
    <div className='common-container'>
      <div className='user-container'>
        <h2 className='h3-bold md:h2-bold text-left w-full'>All Users</h2>
        {isLoading && !creators ? (
          <Loader1 />
        ) : (
          <ul className='user-grid'>
            {creators?.documents.map((creator) => (
              <li key={creator?.$id} className='flex-1 min-w-[200px] w-full  '>
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
