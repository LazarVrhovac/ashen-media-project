import { Routes, Route } from 'react-router-dom';

import RootLayout from './_root/RootLayout';
import SignInForm from './_auth/forms/SignInForm';
import { Home } from './_root/pages';
import SignUpForm from './_auth/forms/SignUpForm';
import AuthFormLayout from './_auth/AuthFormLayout';
import './globals.css';

const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthFormLayout />}>
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
