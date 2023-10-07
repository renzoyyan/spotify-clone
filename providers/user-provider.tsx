'use client';

import { MyUserContextProvider } from '@/hooks/use-user';

type UserProviderProps = {
  children: React.ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};
export default UserProvider;
