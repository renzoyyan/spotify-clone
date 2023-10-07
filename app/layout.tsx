import { Figtree } from 'next/font/google';

import getSongsByUserId from '@/actions/get-songs-by-user-id';
import Player from '@/components/player';
import Sidebar from '@/components/sidebar';
import ModalProvider from '@/providers/modal-provider';
import SupabaseProvider from '@/providers/supabase-provider';
import ToasterProvider from '@/providers/toaster-provider';
import UserProvider from '@/providers/user-provider';
import type { Metadata } from 'next';
import './globals.css';

const figtree = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music!',
};

export const revalidate = 0;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={figtree.className}>
        <ToasterProvider />

        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
