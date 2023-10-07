'use client';

import { AiOutlinePlus } from 'react-icons/ai';
import { TbPlaylist } from 'react-icons/tb';

import useAuthModal from '@/hooks/use-auth-modal';
import useOnPlay from '@/hooks/use-on-play';
import useUploadModal from '@/hooks/use-upload';
import { useUser } from '@/hooks/use-user';
import { Song } from '@/types/commons';
import MediaItem from './media-item';

type LibraryProps = {
  songs: Song[];
};

const Library = ({ songs }: LibraryProps) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onPlay = useOnPlay(songs);

  const handleUploadSong = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // TODO: Check for subscription

    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium">Your Library</p>
        </div>

        <AiOutlinePlus
          onClick={handleUploadSong}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map(item => (
          <MediaItem key={item.id} data={item} onClick={id => onPlay(id)} />
        ))}
      </div>
    </div>
  );
};

export default Library;
