import { Routes, Route } from 'react-router-dom';

import RootLayout from './_root/RootLayout';
import SignInForm from './_auth/forms/SignInForm';
import {
  AllUsers,
  CreatePost,
  EditPost,
  Explore,
  Home,
  PostDetails,
  Profile,
  Saved,
  UpdateProfile,
} from './_root/pages';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthFormLayout from './_auth/AuthFormLayout';
import './globals.css';

import { Toaster } from '@/components/ui/toaster';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public */}
        <Route element={<AuthFormLayout />}>
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>

        {/* private */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/all-users' element={<AllUsers />} />
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<EditPost />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/update-profile/:id' element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
