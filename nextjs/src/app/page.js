//redirects to other routes based on logged in status


import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

// import {redirect} from 'next/navigation';

export default async function ProfileServer() {
  const session = await getSession();
  const user = session?.user;

  if (user) {
    redirect('/profile');
  } else {
    redirect('/login');
  }

  return (
      <div>You shouldnt be here</div>
  );
}