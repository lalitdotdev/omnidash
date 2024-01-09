import { UserButton, auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import StoreSwitcher from '@/components/store-switcher';

import prismadb from '@/lib/prismadb';

import { MainNav } from './main-nav';
import { ThemeToggle } from './theme-toggle';

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <StoreSwitcher items={stores} />
        <MainNav />
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
